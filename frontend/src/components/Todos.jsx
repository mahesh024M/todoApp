
/* eslint-disable */
export function Todos({todos}){
          
    function onClickHandler(id){
         
        fetch("http://localhost:8000/completed",{
            method:"PUT",
            body:JSON.stringify({
               id:id
            }),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(async function(res){
            const json=await res.json();
            console.log(json);

            //alert("Todo updated");
        })
    }
    return(
        <div>
           {todos.map(function(todo,index){
             return <div key={index}>
                 <h2>{todo.title}</h2>
                 <p>{todo.description}</p>
                  <button  onClick={()=>onClickHandler(todo._id)}>{todo.completed ==true ? "Completed" : "Mark As Completed"}</button>
             </div>
           })}
        </div>
    )
}