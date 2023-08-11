import { Router } from "express"
import homeController from "../controllers/homeController.js"

const routes = Router();

routes.get("/", (req, res) => {res.send("Hello world!")})
routes.get("/home/:search", homeController.homeFunction)
routes.get("/baseConnection/:url", homeController.baseConnection)
routes.get("/sergipe", homeController.connectSergipeHML)

export { routes }