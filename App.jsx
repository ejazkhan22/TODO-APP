
import { useState } from 'react'
import './App.css'
import Navbar from './Compunent/Navbar'
import { v4 as uuidv4 } from 'uuid';
function App() {


const [todo, settodo] = useState('')
const [todos, settodos] = useState([])

const handelAdd =()=>{
settodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
settodo('')
}

const handeledit= (e,id)=>{
let edit =todos.filter(item=>item.id === id )
settodo(edit[0].todo)
let newtodos = todos.filter(item=>{
  return item.id!==id
})
settodos(newtodos)
}
 const  handeldelet = (id)=>{

let newtodos = todos.filter(item=>{
  return item.id!==id
})
settodos(newtodos)
console.log("ok")
 }
const handelchange=(e)=>{
  settodo(e.target.value)
}
const handelmark=(e)=>{
let id = e.target.name
let index = todos.findIndex(item =>{
  return item.id===id
})
let newtods = [...todos];
newtods[index].isCompleted=!newtods[index].isCompleted
settodos(newtods)
}
  return (
    <>
    <Navbar/>
    <div className="container al mx-auto my-5 rounded-xl p-5 bg-amber-100 min-h-[70vh]  ">
 <div className="addtodo ">
  <h2 className='text-lg font-bold'> Add Todo</h2>
  
  <input value={todo} type="text" className='rounded-2xl  bg-white w-1/2 py2 p-3' onChange={handelchange} />
  <button onClick={handelAdd} className='bg-amber-300 hover:bg-amber-500 my-5  font-bold text-sm p-2 py-1 text-white rounded-md mx-5'>Add</button>
 </div>
    <h1  className='text-lg font-bold'>
   Your Todo's
    </h1>
   <div className="todos">
    
   
     { todos.length === 0 && <div className='m-5 '>No Todo's </div>}
    
    {
      
      todos.map((item)=>{
        return(    <div key={item.id} className=" bg-amber-100 todo flex justify-between w-1/2 my-3">
          <div className='flex gap-5'>
          <input name={item.id} type='checkbox' value={todo.isCompleted} onChange={handelmark}></input>
          <div className={item.isCompleted?'line-through':''}>{item.todo}.</div>
          </div>
        
          <div className="buttons">
            <button  className='bg-amber-300 hover:bg-amber-500 font-bold text-sm p-2 py-1 text-white rounded-md mx-2'onClick={ (e)=>{handeledit(e,item.id)}} >Edit</button>
            <button  className='bg-amber-300 hover:bg-amber-500 font-bold text-sm p-2 py-1 text-white rounded-md mx-1'onClick={(e)=>{handeldelet( item.id)}} >Delete</button>
          </div>
              </div>)
    

      })
    }
   </div>
   
    </div>
 
    </>
  )
}

export default App
