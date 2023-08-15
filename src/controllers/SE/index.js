import SEService from "../../services/SE/index.js"

export default {
    async metodo424EnvioDeCreditoDaAula (req, res) {
        const data = await SEService.metodo424EnvioDeCreditoDaAula({
            cnhInstrutor: '02360202570',
            cpfAluno: '88555887534',
            dataAula: '01012001',
            horarioInicioAula: '0600',
            horarioFimAula: '0800',
        })
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