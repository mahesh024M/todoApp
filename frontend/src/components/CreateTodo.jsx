import { useState } from "react"


 export function CreateTodo(){
      
   const [title,setTitle]=useState("");
   const [description,setDescription]=useState("");

    
   function onClickHandler(){
          console.log("buttooon clicked");
         fetch("http://localhost:8000/todo",{
             method:"POST",
             body:JSON.stringify({
                 title:title,
                 description:description
             }),
             headers:{
                 "Content-type":"application/json"
             }
         })
         .then(async function(res){
             const json=await res.json();
             console.log(json);

             alert("Todo added");
         })

   }

     return(
        <div>
            <input  style={{
                padding:10,
                margin:10
            }} type="text" placeholder="title"  onChange={function(e){
                 setTitle(e.target.value)
            }}></input> <br></br>
            <input   style={{
                padding:10,
                margin:10
            }} type="text" placeholder="description"  onChange={function(e){
                  setDescription(e.target.value);
            }}></input> <br></br>
            <button  style={{
                padding:10,
                margin:10
            }} onClick={onClickHandler}>Addtodo</button>
        </div>
     )

}

