import axios from "axios";

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

        return await this.sendSOAPRequestSE(soapRequest)
    },
    async sendSOAPRequestSE(soapRequest) {
        return new Promise(async (resolve, reject) => {
            const url = 'https://ws.transacao.parceiros.services.h-detran.gov-se';
            const payload = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/soap+xml',
                },
                body: soapRequest,
            }

            try {
                const data = await axios.post(url, payload)
                    .then(resp => resp.data)
                    .catch(err => {
                        resolve(err);
                    });

                resolve(data);
            } catch (error) {
                console.error(error);
                reject([]);
            }
        });
    }
}