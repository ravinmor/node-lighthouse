import fetch from "node-fetch"

export default {
    async homeService(search) {
        const data = fetch(`https://www.google.com/search?q=${search}`)
        .then(res => res.text())

        return data
    }
}