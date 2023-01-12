import express from "express";
import creditCardModel from '../Models/cardModel.js'
import  validate  from "../utils/validation.js";
const router = express.Router();

router.get("/", (req,res)=>{
    try{
        console.log("getting data")
       creditCardModel.find().then(data=>res.json(data)).catch(error=>res.json(error))
    }
    catch(error){
    res.json(error)
    }
   
})
router.post("/add", (req, res)=>{
 const invalid = validate(req.body);
 if(invalid){
    res.status(442).json({
        status:'error',
        message: "invalid data"
    }) 
 }
   else{
    try{
        const creditCard = new creditCardModel({
        cardname: body.cardname,
        cardnumber: body.cardnumber,
        cardlimit: body.cardlimit,
        cardBalance: 0,
        currency: "£"
        });
      
        creditCard.save().then(()=>res.json({msg: "data added"})).catch(error=>res.json(error))
    }
    catch(error){
    res.json(error)
    }
}
})
router.delete("/delete",(req,res)=>
{ try{
  creditCardModel.findByIdAndDelete("63bff520ad46c1b1cc5cab13").then(()=>res.json({"msg": "deleted"})).catch(error=>res.json(error))
}
catch(error){
res.json(error)
}

})

export default router;
