import {configureStore} from '@reduxjs/toolkit'
import ToggleReducer from '../Features/ToggleSlice'
import ChatReducer from '../Features/ChatSlice'
export const store = configureStore({
    reducer:{
        Toggle: ToggleReducer,
        Chat: ChatReducer
    }
})