import { model, Schema } from "mongoose"
import { TicketI } from "../../types"

export const TicketSchema = new Schema<TicketI>(
  {
    positions: { type: Number, indexes: true },
    participant: { type: Schema.Types.ObjectId, ref: "Participant", default: null },
    cellphone: { type: String, default: null },
    raffleId: { type: Schema.Types.ObjectId, ref: "Raffle", required: true },
    taken: { type: Boolean, default: false },
    pay: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
)

export default model("Ticket", TicketSchema)
