/* eslint-disable no-undef */
const express =require('express');
const router=express.Router();

router.get('/dummyData',(req,res)=>{
    try{
    const data=[{
        name:'sana',
        email:'sana02@fe.com'
    },
   {
    name:'sana23',
    email:'sana02333@fe.com'
   }]
   res.status(200).send(data);
}
catch(error){
    res.status(400).send({
        message:error
    })
}
    
})


module.exports=router;