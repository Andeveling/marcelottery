import { Router } from "express"
import * as ticketCtrl from "../controllers"
const ticket = Router()

ticket.get("/tickets", ticketCtrl.getTickets)
ticket.get("/tickets/:userId", ticketCtrl.getTickets)
ticket.post("/ticket", ticketCtrl.createTicket)
ticket.put("/ticket", ticketCtrl.updateTicket)
ticket.delete("/ticket", ticketCtrl.deleteTicket)

export default ticket
