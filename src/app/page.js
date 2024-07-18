'use client'

import Image from "next/image";
import { useEffect, useState, Suspense} from "react";


const Loading = () =>{
  return(
    <div className="flex justify-center items-center w-full h-[100vh]">
        <p>
          loading todos...
        </p>

    </div>
  )


}

export default function Home() {

  const [todos, getTodos] =  useState()

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => getTodos(json))
    .catch(error => {console.log(error)})
  },[])

 

  return (   
<>
      { 
          todos ? 
          
          <div className="p-5">
          <h1 className="pb-10 text-[1.5rem]">
            Todos
          </h1>

          <ul>
            {todos.map((todo,i) => <li key={todo.id}> {todo.title}</li>)}
          </ul>

        
          </div> :

          <Loading/>

      }
     
 
</>
    
  );
}
