import { Schema, model } from "mongoose"
import { DatePlayLotteryI } from "../../types"

const DatePlayLotterySchema = new Schema<DatePlayLotteryI>({
  lottery: { type: Schema.Types.ObjectId, ref: "Lottery", required: true },
  date: { type: Date, required: true },
})

export default model("DatePlayLottery", DatePlayLotterySchema)
