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
    async connectSergipeHML() {
        const url = 'https://ws.transacao.parceiros.services.h-detran.gov-se';

        const soapRequest = `
        <soapenv:Envelope xmlns:soapenv="http://www.w3.org/2003/05/soap-envelope" xmlns:tem="http://tempuri.org/">
            <soapenv:Header/>
            <soapenv:Body>
                <tem:executaTransacao>
                    <tem:pUsuario>DET53011</tem:pUsuario>
                    <tem:pSenha>DET53011</tem:pSenha>
                    <tem:pAmbiente>D</tem:pAmbiente>
                    <tem:pMensagem>424CFC2070236020257088555887534</tem:pMensagem>
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
            } catch (error) {
              console.error(error);
            }
        };
          
        sendSOAPRequest(soapRequest);
        return data
    }
}