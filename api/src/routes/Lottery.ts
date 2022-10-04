import { authorization } from "@/middleware/authorization"
import { Router } from "express"
import * as LotteryCtrl from "../controllers/Lottery"
const lottery = Router()

lottery.get("/lotteries", LotteryCtrl.getLotteries)
lottery.get("/lottery/:id", authorization, LotteryCtrl.getLottery)
lottery.post("/lottery", authorization, LotteryCtrl.createLottery)
lottery.delete("/lottery/:id", authorization, LotteryCtrl.deleteLottery)

export default lottery
