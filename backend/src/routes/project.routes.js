import { Router } from "express"
import { getAllProjects } from "../controllers/project.controllers.js"
import { messages } from "../controllers/message.controllers.js"


const router = Router()

router.route("/project").get(getAllProjects)
router.route("/message").post(messages)