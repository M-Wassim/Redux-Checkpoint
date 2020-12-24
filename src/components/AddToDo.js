import {React,useState} from 'react'
import { ADDTODO } from '../redux/constantes';
import {useDispatch} from 'react-redux'
import { addtodo } from '../redux/actions';

const AddToDo = () => {
    const [text, setText] = useState("");
    let  dispatch = useDispatch()
    const ad=()=>{
       dispatch(addtodo(text))
       setText("")
    }
    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={ad}>Add</button>
        </div>
    )
}

export default AddToDo
