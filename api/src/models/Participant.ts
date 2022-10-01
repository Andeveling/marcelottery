import { Schema, model } from "mongoose"
import { ParticipantI, MethodPayEnum } from "../../types"

const ParticipantSchema = new Schema<ParticipantI>(
  {
    name: { type: String, required: true },
    cellphone: { type: String, required: true },
    methodPay: { type: String, enum: MethodPayEnum },
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
  },
  { timestamps: true, versionKey: false }
)

export default model("Participant", ParticipantSchema)
