import { model, Schema } from "mongoose"
import { RaffleI } from "../../types"

const RaffleSchema = new Schema<RaffleI>(
  {
    title: { type: String, required: true },
    description: { type: String },
    datePlayLotteryIds: [{ type: Schema.Types.ObjectId, ref: "DatePlayLottery", default: null }],
    ticketsIds: [{ type: Schema.Types.ObjectId, ref: "Ticket", default: null }],
    adminId: { type: Schema.Types.ObjectId, ref: "Admin" },
    price: { type: Number },
  },
  { timestamps: true, versionKey: false }
)

export default model("Raffle", RaffleSchema)
