import { model, Schema } from "mongoose"
import { RaffleI } from "../../types"

const RaffleSchema = new Schema<RaffleI>(
  {
    lottery: { type: String, required: true },
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket", default: null }],
    datePlay: { type: Date },
    reward: { type: String },
    admin: { type: Schema.Types.ObjectId, ref: "Admin" },
    price: { type: Number },
  },
  { timestamps: true, versionKey: false }
)

export default model("Raffle", RaffleSchema)
