import { Log } from "../models/logs.js"
export const postTransInfo = async(req,res)=>{
    const {sender_name,receiver_name,sent_amount,rec_amount,purpose} = req.body
    const logs = await new Log({
        sent_amount,rec_amount,sender_name,receiver_name,purpose
        
      }) 
    try {
       
          await logs.save()
          res.send("fetching info success")
         
    } catch (error) {
        res.status(400).send(error.message)
    }


}
export const getTransInfo = async(req,res)=>{
    try {
        await Log.find({}).sort([['createdAt',-1]]).then(data=>res.send(data))
    } catch (error) {
        res.send(error.message)
    }
}
