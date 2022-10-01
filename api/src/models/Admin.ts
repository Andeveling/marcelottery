import { Schema, model } from "mongoose"
import { AdminI } from "../../types"

const AdminSchema = new Schema<AdminI>(
  {
    username: { type: String, required: true, trim: true, unique: true, sparse: true },
    password: { type: String, required: true },
    raffles: [{ type: Schema.Types.ObjectId, ref: "Ticket" }],
    role: [{ type: Schema.Types.ObjectId, ref: "Role" }],
  },
  { timestamps: true, versionKey: false }
)

export default model("Admin", AdminSchema)
