import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState ={
    todos :[{id:1, text :"hello world"}],

}

export const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state, action) =>{         //syntax
            const todo = {
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo : (state ,action) =>{
            state.todos =state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo :(state ,action) =>{
            state.todos = state.todos.map((todo) => todo.id === action.payload.id? {...todo,...action.payload} : todo )
        }

    },
})

export const {addTodo, removeTodo, updateTodo  } =TodoSlice.actions

export default TodoSlice.reducer;

//  in reducer function we have access to the state object  and  action object