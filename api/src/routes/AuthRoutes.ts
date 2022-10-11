import { Router } from "express"
import * as AuthCtrl from "../controllers/AuthControllers"
const auth = Router()

auth.post("/login", AuthCtrl.login)

export default auth
