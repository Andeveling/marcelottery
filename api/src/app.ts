import express from "express"
import config from "./config"
import morgan from "morgan"
import cors from "cors"
import * as routes from "../src/routes"

export const app = express()
// CONFIG
app.set("port", config.PORT)

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))

// ROUTES
app.use(routes.Auth)
app.use(routes.Admin)
app.use(routes.Raffle)
app.use(routes.Ticket)
app.use(routes.Participant)

export default app
