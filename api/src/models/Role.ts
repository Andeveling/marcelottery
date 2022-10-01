import { Schema, model } from "mongoose"
import { RolesEnum, RolesI } from "../../types"

const roleSchema = new Schema<RolesI>(
  {
    name: { type: String, enum: RolesEnum },
  },
  {
    versionKey: false,
  }
)

export default model("Role", roleSchema)
