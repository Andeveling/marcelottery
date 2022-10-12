import { Schema, model } from "mongoose"
import { DatePlayLotteryI } from "../../types"

const DatePlayLotterySchema = new Schema<DatePlayLotteryI>({
  lotteryId: { type: Schema.Types.ObjectId, ref: "Lottery", required: true },
  reward: { type: String },
  date: { type: Date, required: true },
})

export default model("DatePlayLottery", DatePlayLotterySchema)
