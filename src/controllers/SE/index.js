import SEService from "../../services/SE/index.js"

export default {
    async metodo424EnvioDeCreditoDaAula (req, res) {
        const pid = process.pid;
        const reqData = req.body;
        console.log('>')
        console.log(`   > Starting SE Connection - Proccess id: ${pid} - Time: ${new Date().toISOString().replace('T', ' ')}`)
        const data = await SEService.metodo424EnvioDeCreditoDaAula(reqData);

        console.log(`   > Ending SE Connection - Proccess id: ${pid} - Time: ${new Date().toISOString().replace('T', ' ')}`)
        res.status(200).send(data)
    },
    async metodo427CadastraCertificado (req, res) {
        const data = await SEService.metodo424EnvioDeCreditoDaAula()
        res.status(200).send(data)
    },
    async metodo431ConsultaProcessoDoAluno (req, res) {
        const data = await SEService.metodo431ConsultaProcessoDoAluno()
        res.status(200).send(data)
    },
    async metodo446ConsultaAAulasCadastradasNoDetran (req, res) {
        const data = await SEService.metodo446ConsultaAAulasCadastradasNoDetran()
        res.status(200).send(data)
    }
}