import { Schema, model } from "mongoose"
import { LotteryI } from "../../types"

const LotterySchema = new Schema<LotteryI>(
  {
    title: { type: String, required: true, sparse: true },
  },
  { timestamps: true, versionKey: false }
)

export default model("Lottery", LotterySchema)
