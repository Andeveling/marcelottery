import { model, Schema } from "mongoose"
import { TicketSchema } from "./Ticket"
import { RaffleI } from "../../types"

const RaffleSchema = new Schema<RaffleI>(
  {
    lottery: { type: String, required: true },
    tickets: [TicketSchema],
    datePlay: { type: Date },
    reward: { type: String },
    admin: { type: Schema.Types.ObjectId, ref: "Admin" },
  },
  { timestamps: true }
)

export default model("Raffle", RaffleSchema)
