const mongoose=require('mongoose');


//mongodb://localhost:27017


const todoSchema=new mongoose.Schema({
      
       title:{
           type:String,
           
       },
       description:{
              type:String
       },
       completed:{
              type:Boolean
       }
       
},{timestamps:true});


const Todo=mongoose.model("Todo",todoSchema);

module.exports={Todo}


