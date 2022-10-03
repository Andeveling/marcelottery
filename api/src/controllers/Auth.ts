import Admin from "../models/Admin"
import { RequestHandler } from "express"
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import config from "../config"

export const login: RequestHandler = async (req, res) => {
  try {
    const { username, password } = req.body
    const admin = await Admin.findOne({ username })
    if (admin) {
      // Validate Pass
      bcryptjs.compare(password, admin.password, (err, resp) => {
        if (err) {
          // handle error
          return res.json(err)
        }
        if (resp) {
          // Send JWT
          // res.status(200).json({ message: "Valid password" })
          const token = jsonwebtoken.sign({ id: admin._id }, config.JWT_TOKEN, {
            expiresIn: 60 * 60 * 24,
          })
          const result = { id: admin._id, auth: true, username: admin.username, token: token }
          return res.json(result)
        } else {
          // response is OutgoingMessage object that server response http request
          return res.json({ success: false, message: "passwords do not match" })
        }
      })
      return
    } else {
      return res.status(401).json({ error: "User does not exist" })
    }
  } catch (error) {
    return res.json(error)
  }
}
