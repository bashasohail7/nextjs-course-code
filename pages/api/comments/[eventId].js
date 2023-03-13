function handler(req,res){
    const {eventId}=req.query
if(req.method==='POST'){
//     console.log('===posting===')
//     const {email,name,text}=req.body
//     //add server side validation
//     if(!email.includes('@')||!name||name.trim()===''||!text||text.trim()===''){
//         res.status(422).json({message:'invalid input'})
//         return;
//     }

//     const newComment={
//         id:new Date().toISOString(),
//         email,name,text
//     }

//  console.log(newComment)
//     res.status(201).json({
//         messgae:'comment added',comment:newComment
//     })
res.status(201).json({message:'comment added'})

}
if(req.method==='GET'){
const dummyList=[
    {id:'c1',name:'Max',text:'first comment'},
    {id:'c2',name:'Max2',text:'Second comment'},
    {id:'c3',name:'Max3',text:'Third comment'}
];
res.status(200).json({comments:dummyList})
}
}