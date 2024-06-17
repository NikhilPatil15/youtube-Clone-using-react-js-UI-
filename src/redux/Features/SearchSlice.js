import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchSuggestions :[]
}

const SearchSlice = createSlice({
    name:"SearchSlice",
    initialState,
    reducers:{
        setSearchSuggestions:(state,action)=>{
            state.searchSuggestions = action.payload
        }
    }
})

export const {setSearchSuggestions} = SearchSlice.actions
export default SearchSlice.reducer