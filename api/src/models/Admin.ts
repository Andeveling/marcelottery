import { Schema, model } from "mongoose"
import { AdminI } from "../../types"

const AdminSchema = new Schema<AdminI>({
  userName: { type: String },
  password: { type: String },
  raffles: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
})

export default model("Admin", AdminSchema)
