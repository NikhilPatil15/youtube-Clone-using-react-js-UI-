import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message:[]
}

const ChatSlice = createSlice({
    name:"ChatSlice",
    initialState,
    reducers:{
        setMessage:(state,action)=>{
            state.message.splice(100,1)
            state.message.push(action.payload)
        },
        clearMessage:(state,action)=>{
            state.message =[]
        }
    }
})

export const { setMessage, clearMessage } = ChatSlice.actions
export default ChatSlice.reducer