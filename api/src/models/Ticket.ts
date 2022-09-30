import { model, Schema } from "mongoose"
import { TicketI } from "../../types"

export const TicketSchema = new Schema<TicketI>(
  {
    position: { type: String },
    participant: { type: Schema.Types.ObjectId, ref: "Participant" },
    raffle: { type: Schema.Types.ObjectId, ref: "Raffle" },
    taken: { type: Boolean, default: false },
    pay: { type: Boolean, default: false },
    price: { type: Number },
  },
  { timestamps: true }
)

export default model("Ticket", TicketSchema)
