import { Router } from "express"
import * as ParticipantCtrl from "../controllers"

const participant = Router()

participant.get("/participant", ParticipantCtrl.getParticipants)
participant.get("/participant", ParticipantCtrl.getParticipant)
participant.post("/participant", ParticipantCtrl.createParticipant)
participant.put("/participant", ParticipantCtrl.updateParticipant)
participant.delete("/participant", ParticipantCtrl.deleteParticipant)

export default participant
