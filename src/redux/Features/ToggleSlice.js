import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    open:true
}

const ToggleSlice = createSlice({
    name:"ToggleSlice",
    initialState,
    reducers:{
        setToggle:(state,action)=>{
            state.open = !action.payload
        }
    }
})

export const {setToggle} = ToggleSlice.actions;
export default ToggleSlice.reducer;