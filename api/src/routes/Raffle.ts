import { authorization } from "../middleware/authorization"
import { Router } from "express"
import * as RaffleCtrl from "../controllers"

const raffle = Router()

raffle.get("/raffle", RaffleCtrl.getRaffles)
raffle.get("/raffle", RaffleCtrl.getRaffle)
raffle.post("/raffle", authorization, RaffleCtrl.createRaffle)
raffle.put("/raffle", RaffleCtrl.updateRaffle)
raffle.delete("/raffle", RaffleCtrl.deleteRaffle)

export default raffle
