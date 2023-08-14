import fetch from "node-fetch"

export default {
    async homeService(search) {
        const data = fetch(`https://www.google.com/search?q=${search}`)
        .then(res => res.text())

        return data
    },
    async baseConnection(url) {
        let headers = {
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
        };

        let obj = {
            method: 'POST',
            headers: headers,
        };

        const data = fetch(url, obj)
        .then(res => res.text())

        return data
    },
    async connectSergipe() {
        const url = 'https://ws.transacao.parceiros.services.h-detran.gov-se';

        const USER = 'DET53011';
        const PASSWORD = 'DET53011';
        const ENV = 'd';

        const methodData = {
            methodCode: '424',                         //
            cfcCode: 'CFC207',                         //
            cnhInstrutor: '02360202570',               //
            cpfAluno: '88555887534',                   //
            dataAula: '01012001',                      // 
            horarioInicioAula: '0600',                 // 06h - 22h
            horarioFimAula: '0800',                    // 06h - 22h
            codigoMateria: "  ",                       // 1 || 2 - Apenas se o tipo aula for S
            tipoAula: 'T',                             // "T" – Teórica, "A" – Atualização, "S" – Simulador, "P" – Prática, "E" – Especializado, "R" – Reciclagem
              categoriaPratica: ' ',                   // Apenas caso o tipo Aula for P ???????????????????????????????? Qual o formato do dado
            placaOuCodigoSimulador: '',                // Informar quando o TIPO-AULA for "P" ou "S" ou "E" ---- Para o TIPO-AULA “E”, somente será exigido se o CODIGO-MATERIA  “V1”, “V2”, “V3” e “V4”
            codigoCursoEspecializado: '',              // Deve ser informado quando o TIPO-AULA for “E” ---          “01” – Cargas Perigosas, “02” – Transporte de Escolares, “03” – Transporte Coletivo de Passageiros, “04” – Capacitação Transporte Veículos de Emergência, “07” – Capacitação Transporte Carga Indivisível, “08” – Mototaxista,  – Motofretista, “11” – Atualização Transporte Produtos Perigosos, “12” – Atualização Transporte Escolar, “13” – Atualização Transporte Coletivo de Passageiros, “14” – Atualização Transporte Veículos Emergência, “17” – Atualização Capac. Transporte Carga Indivisível, “18” – Atualização Mototaxista, “19” – Atualização Motofretista
            nroAcertosProvas: '',                      // 
            creditoManual: 'N',                        // "S" – Sim, "N" – Não; Caso o parâmetro NÃO seja informado, considerar CREDITO-MANUAL = “N”
            cpfRespCreditoManual: '',                  // Informar quando o CREDITO-MANUAL for "S".
            qtdeAulasSimuladorNoturnasPretendidas: '', // 
            motivoCreditoManual: '                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ',                              // Informar quando o CREDITO-MANUAL for "S".  ???????????????????????????????? Qual o formato do dado
            aulaADistancia: 'S',                       // Deve ser informado “S” para aula à distância. Válido para aula teórica (“T”), atualização (“A”), especialização (“E”) e reciclagem (“R”). Obrigatório para os CFCs com aulas presenciais e remotas. Não obrigatório para CFCs EaD. 
            indiceVidAula: '09123',                    // 99999 - CASO O ÍNDICE DE VALIDAÇÃO BIOMÉTRICA SEJA INFERIOR A 85%, A AULA SERÁ CANCELADA E O CONDUTOR DEVERÁ RETORNAR AO DETRAN/SE
        } 

        const message = `${methodData.methodCode}${methodData.cfcCode}${methodData.cnhInstrutor}${methodData.cpfAluno}${methodData.dataAula}${methodData.horarioInicioAula}${methodData.horarioFimAula}${methodData.codigoMateria}${methodData.tipoAula}${methodData.categoriaPratica}${methodData.placaOuCodigoSimulador}${methodData.codigoCursoEspecializado}${methodData.nroAcertosProvas}${methodData.creditoManual}${methodData.cpfRespCreditoManual}${methodData.qtdeAulasSimuladorNoturnasPretendidas}${methodData.motivoCreditoManual}${methodData.aulaADistancia}${methodData.indiceVidAula}`;
        
        console.log(`--${message}--`)

        const soapRequest = `
            <soapenv:Envelope xmlns:soapenv="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">
                <soapenv:Header/>
                <soapenv:Body>
                    <tem:executaTransacao>
                        <tem:pUsuario>${USER}</tem:pUsuario>
                        <tem:pSenha>${PASSWORD}</tem:pSenha>
                        <tem:pAmbiente>${ENV}</tem:pAmbiente>
                        <tem:pMensagem>${message}</tem:pMensagem>
                    </tem:executaTransacao>
                </soapenv:Body>
            </soapenv:Envelope>
        `;
        
        const sendSOAPRequest = async (soapRequest) => {
            try {
              const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/soap+xml; charset=utf-8',
                },
                body: soapRequest,
              });
              const data = await response.text();
              console.log(data);
              return data;
            } catch (error) {
              console.error(error);
              return [];
            }
        };
          
        const data = sendSOAPRequest(soapRequest);
        return data;
    }
}