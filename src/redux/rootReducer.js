import { combineReducers } from "redux";
import reducer from "./reducer"

export const rootReducer=combineReducers({
    x:reducer,
//      x:{  
//     todos:[
//         { id: 1, complete: false, edit: false, text: "mohamed" },
//         { id: 2, complete: false, edit: false, text: "aymen" },
//         { id: 3, complete: true, edit: false, text: "salah" }
//       ]
// },
})