import { RequestHandler } from "express"
import Admin from "../models/AdminModel"
import bcryptjs from "bcryptjs"

export const getAdmins: RequestHandler = async (_req, res) => {
  try {
    const findAdmins = await Admin.find()
    return res.json(findAdmins)
  } catch (error) {
    return res.json(error)
  }
}

export const getAdmin: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params
    const admin = await Admin.findById(id)
    return res.json(admin)
  } catch (error) {
    return res.json(error)
  }
}

export const createAdmin: RequestHandler = async (req, res) => {
  try {
    const { username, password } = req.body
    const findAdmin = await Admin.findOne({ username })
    if (findAdmin) {
      return res.json({ msg: `${findAdmin.username} ya existe como admin en la base de datos` })
    } else {
      //hash
      const salt = bcryptjs.genSaltSync(10)
      const hash = bcryptjs.hashSync(password, salt)
      //create
      const newAdmin = new Admin({
        username,
        password: hash,
      })
      await newAdmin.save()
      return res.json({ msg: `${newAdmin.username} ahora es admin` })
    }
  } catch (error) {
    return res.json(error)
  }
}

export const updateAdmin: RequestHandler = async () => {
  try {
  } catch (error) {}
}
export const deleteAdmin: RequestHandler = async (req, res) => {
  try {
    const { username } = req.body
    const findAdmin = await Admin.findOne({ username })
    if (findAdmin) {
      res.json({ msg: `Admin ${findAdmin.username} borrado con exito` })
      await findAdmin.delete()
      return
    } else {
      return res.json({ msg: `Admin ${username} no encontrado` })
    }
  } catch (error) {
    return res.json(error)
  }
}
