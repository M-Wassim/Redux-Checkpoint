import {React,useState} from 'react'
import { completetodo, deletetodo, edittodo, savetodo } from '../redux/actions'
import {useDispatch} from 'react-redux'

const Todo = ({el}) => {
    let dispatch = useDispatch()
    const del=()=>{
        dispatch(deletetodo(el.id))
    }
    const comp=()=>{
        dispatch(completetodo(el.id))
    }
    const edit=()=>{
        setInp(el.text)
        dispatch(edittodo(el.id))
    }
    const cancel=()=>{
        dispatch(edittodo(el.id))
        
    }

    const save=()=>{
        dispatch(savetodo({id:el.id,text:inp}))
        edit()
    }
const [inp,setInp]=useState(el.text)

    return (
        <>
          {el.edit? (
          <div>
                <input type="text" value ={inp} onChange={(e)=>setInp(e.currentTarget.value)}></input>   
                <button onClick={cancel}>Cancel</button>       
                <button onClick={save}>Save</button>
               
           </div>
           ) : (
           <div style={{display:"flex",justifyContent:"center"}}>  
               <div style={{width:"600px",marginTop:"3px"}}>
               <div className="tod" >
               <span  style={
                 el.complete
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }> {el.text} </span>
               </div>
               </div>
           <div style={{width:"500px",textAlign:"center"}}>
                    <button onClick={comp}>{el.complete? "UNDO":"COMPLETE"}</button>
                    <button onClick={edit}>EDIT</button>
                    <button onClick={del}>DELETE</button>
           </div>
           
            </div>
) }

        
        </>
    )
}

export default Todo
