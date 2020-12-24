import {React,useState} from 'react'
import {useSelector} from 'react-redux'
import Todo from './Todo'

const TodoList = () => {
     let list = useSelector(state=>state.x.todos)
     
     const [perm,setPerm]= useState(null)
      
     const toggle=()=> {
            setPerm(false)
 }

 const toggle2=()=> {
    setPerm(null)
}
      
    return (
       <div> 
         
           <button onClick={toggle}>all Done todos</button>
           <button onClick={toggle2}>all Todos</button>

    
         
            
            {list.filter((el)=>el.id !== 0 && el.complete !== perm).map((el)=> <Todo el={el} />)}
        </div>
    )
}

export default TodoList
