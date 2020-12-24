import { ADDTODO, COMPLETETODO, DELETETODO, EDITTODO, SAVETODO } from "./constantes";

const initState={
    todos:[
        { id: 1, complete: false, edit: false, text: "mohamed" },
        { id: 2, complete: false, edit: false, text: "aymen" },
        { id: 3, complete: true, edit: false, text: "salah" }
      ]
}

const reducer=(state=initState,{type,payload})=>{
    switch (type) {
        case ADDTODO:
             return{...state,todos:[{ id: Math.random(), complete: false, edit: false, text:payload },...state.todos]}
        case DELETETODO:
            return{...state,todos:state.todos.filter((el) => el.id !== payload)}  
        case COMPLETETODO: 
            return{...state,todos:state.todos.map((el) => (el.id === payload ? { ...el, complete: !el.complete } : el))} 
        case EDITTODO: 
            return{...state,todos:state.todos.map((el) => (el.id === payload ? { ...el, edit: !el.edit } : el))}  
        case SAVETODO:
            return{...state,todos:state.todos.map((el)=>(el.id === payload.id ? {...el,text:payload.text}:el))}
     
        default:return state;

            
    }
    
}

export default reducer;