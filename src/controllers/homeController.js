import homeService from "../services/homeService.js"

export default {
    async homeFunction (req, res) {
        const search = req.params.search 
        const data = await homeService.homeService(search)
        res.status(200).send(data)
    },
}