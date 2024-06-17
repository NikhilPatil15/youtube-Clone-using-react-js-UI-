import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    video:[],
    category:"All"
}

const VideoSlice = createSlice({
    name:"VideoSlice",
    initialState,
    reducers:{
        setVideo:(state,action)=>{
            state.video = action.payload
        },
        setCategory:(state,action)=>{
            state.category = action.payload
        }
    }
})

export const {setCategory, setVideo} = VideoSlice.actions
export default VideoSlice.reducer
