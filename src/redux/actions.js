import { ADDTODO, COMPLETETODO, DELETETODO, EDITTODO, SAVETODO } from "./constantes"

export const addtodo=(payload)=>{
    return {
        type:ADDTODO,
        payload
    }
}
export const edittodo=(payload)=>{
    return {
        type:EDITTODO,
        payload
    }
}
export const deletetodo=(payload)=>{
    return{
        type:DELETETODO,
        payload
    }
}
export const completetodo=(payload)=>{
    return{
        type:COMPLETETODO,
        payload
    }
}
export const savetodo=(payload)=>{
    return{
        type:SAVETODO,
        payload
    }
}