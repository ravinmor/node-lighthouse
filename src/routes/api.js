import { Router } from "express"
import SEcontroller from "../controllers/SE/index.js"

const routes = Router();

routes.get("/", (req, res) => {res.send("Hello world!")})
routes.get("/sergipe/SE/424", SEcontroller.metodo424EnvioDeCreditoDaAula)
routes.get("/sergipe/SE/427", SEcontroller.metodo427CadastraCertificado)
routes.get("/sergipe/SE/431", SEcontroller.metodo431ConsultaProcessoDoAluno)
routes.get("/sergipe/SE/446", SEcontroller.metodo446ConsultaAAulasCadastradasNoDetran)

export { routes }