import { authorization } from "../middleware/authorization"
import { Router } from "express"
import * as RaffleCtrl from "../controllers"

const raffle = Router()

raffle.get("/raffles", RaffleCtrl.getRaffles)
raffle.get("/raffle/:id", RaffleCtrl.getRaffle)
raffle.post("/raffle", authorization, RaffleCtrl.createRaffle)
raffle.put("/raffle", authorization, RaffleCtrl.updateRaffle)
raffle.delete("/raffle/:id", authorization, RaffleCtrl.deleteRaffle)

export default raffle
