const express =require('express')
const app=express()
const cors=require('cors')
const {createTodo,updateTodo} =require('./types')
const {Todo}=require('./db')

const PORT=8000;
app.use(cors());
app.use(express.json())

app.post('/todo',async(req,res)=>{

  const createPayload=req.body;
  const parsedPayload=createTodo.safeParse(createPayload);

  if(!parsedPayload.success){
      res.status(411).json({
        msg:"You sent incorrect inputs"
      })
      return;
  }
  
  // put it in mongodb
   await Todo.create({
      title:createPayload.title,
      description:createPayload.description,
      completed:false
   })

   res.json({
     msg:"Todo created"
   })


})

app.get('/todos',async(req,res)=>{
   
const todos= await Todo.find({});

//console.log(todos);


res.json({
    todos
})

})

app.put('/completed',async(req,res)=>{
       
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"wrong user id"
        })
        return;
    }

     await Todo.updateOne({
        _id:req.body.id
     },{
         
       completed:true
         
     })

  res.json({
     msg:"Todo marked as completed"
  })

})



app.listen(PORT,(err)=>{
  if (err) {
    console.error('Server failed to start:', err);
} else {
    console.log(`Server is listening on port ${PORT}`);
}
})

