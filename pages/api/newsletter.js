function handler(req,res){
    if(req.method==='POST'){
const userEmail=req.body.email
if(!userEmail||!userEmail.includes('@')){
    res.status(422).json({message:'invalid email address'})
    return ;
}
res.status(201).json({message:'user created'})

    }
}
export default handler;