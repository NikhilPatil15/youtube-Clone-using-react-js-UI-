import {configureStore} from '@reduxjs/toolkit'
import ToggleReducer from '../Features/ToggleSlice'
export const store = configureStore({
    reducer:{
        Toggle: ToggleReducer
    }
})