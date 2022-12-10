import {Router} from 'express'
import { postTransInfo,getTransInfo } from '../controllers/transcontroller.js'
export const infoRouter = Router()


infoRouter.post("/send",postTransInfo)
infoRouter.get("/gettxns",getTransInfo)

