import { Schema, model } from "mongoose"
import { ParticipantI, MethodPayI } from "../../types"

const ParticipantSchema = new Schema<ParticipantI>({
  name: { type: String, required: true },
  cellphone: { type: String, required: true },
  methodPay: { type: String, enum: MethodPayI },
  tickets: { type: Schema.Types.ObjectId, ref: "Tickets" },
})

export default model("Participant", ParticipantSchema)
