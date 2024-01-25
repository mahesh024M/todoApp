const mongoose=require('mongoose');


//mongodb://localhost:27017
mongoose.connect("mongodb+srv://mahesh:mahesh123@cluster0.d9bwgju.mongodb.net/");

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


