import homeService from "../services/homeService.js"

export default {
    async homeFunction (req, res) {
        const search = req.params.search 
        console.log('>'+search)
        const data = await homeService.homeService(search)
        res.status(200).send(data)
    },
    async baseConnection (req, res) {
        const url = req.params.url 
        const data = await homeService.baseConnection(url)
        res.status(200).send(data)
    },
    async connectSergipeHML (req, res) {
        const data = await homeService.connectSergipe()
        res.status(200).send(data)
    },
}