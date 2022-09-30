import express from "express"
import config from "./config"
import morgan from "morgan"
import cors from "cors"
import { Admin, Participant, Raffle, Ticket } from "@routes/index"

export const app = express()
// CONFIG
app.set("port", config.PORT)

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

// ROUTES
app.use(Admin)
app.use(Raffle)
app.use(Ticket)
app.use(Participant)

export default app
