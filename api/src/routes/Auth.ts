import { Router } from "express"
import * as AuthCtrl from "../controllers/Auth"
const auth = Router()

auth.post("/login", AuthCtrl.login)

export default auth
