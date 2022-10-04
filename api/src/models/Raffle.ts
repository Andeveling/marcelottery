import { model, Schema } from "mongoose"
import { RaffleI } from "../../types"

const RaffleSchema = new Schema<RaffleI>(
  {
    title: { type: String, required: true },
    description: { type: String },
    datePlayLottery: [{ type: Schema.Types.ObjectId, ref: "DayPlayLottery", default: null }],
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket", default: null }],
    reward: { type: String },
    admin: { type: Schema.Types.ObjectId, ref: "Admin" },
    price: { type: Number },
  },
  { timestamps: true, versionKey: false }
)

export default model("Raffle", RaffleSchema)
