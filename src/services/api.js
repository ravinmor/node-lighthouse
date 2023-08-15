export default {
    async sendRequestSE(message) {
        const USER = 'DET53011';
        const PASSWORD = 'DET53011';
        const ENV = 'd';

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

        return await this.sendSOAPRequestSE()
    },
    async sendSOAPRequestSE(soapRequest) {
        const url = 'https://ws.transacao.parceiros.services.h-detran.gov-se';
        const payload = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/soap+xml; charset=utf-8',
            },
            body: soapRequest,
          }

        try {
          const response = await fetch(url, payload);
          
          const data = await response.text();
          console.log(data);
          return data;
        } catch (error) {
          console.error(error);
          return [];
        }
    }
}