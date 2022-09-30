import { Router } from "express"
import * as RaffleCtrl from "@controllers/Raffle"

const raffle = Router()

raffle.get("/raffle", RaffleCtrl.getRaffles)
raffle.get("/raffle", RaffleCtrl.getRaffle)
raffle.post("/raffle", RaffleCtrl.createRaffle)
raffle.put("/raffle", RaffleCtrl.updateRaffle)
raffle.delete("/raffle", RaffleCtrl.deleteRaffle)

export default raffle
