import { Router } from "express"
import * as AdminCtrl from "@controllers/Admin"

const admin = Router()

admin.get("/admin", AdminCtrl.getAdmins)
admin.get("/admin", AdminCtrl.getAdmin)
admin.post("/admin", AdminCtrl.createAdmin)
admin.put("/admin", AdminCtrl.updateAdmin)
admin.delete("/admin", AdminCtrl.deleteAdmin)

export default admin
