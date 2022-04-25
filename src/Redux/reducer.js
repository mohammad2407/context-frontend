import { ADD_NEW_LIST } from "./action";


const initialState = {
    todos:[''],
    userDetails:{
        name: 'Mohammad'
    }
};

export const reducer = (store = initialState,action) =>{
    switch(action.type){
        case ADD_NEW_LIST:
            return{
                ...store,
                todos:[...store.todos, action.payload]
            };
        default:
            return store;
    }
}