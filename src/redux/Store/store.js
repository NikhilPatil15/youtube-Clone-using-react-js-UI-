import {configureStore} from '@reduxjs/toolkit'
import ToggleReducer from '../Features/ToggleSlice'
import ChatReducer from '../Features/ChatSlice'
import VideoReducer from '../Features/VideoSlice'
import SearchReducer from '../Features/SearchSlice'
export const store = configureStore({
    reducer:{
        Toggle: ToggleReducer,
        Chat: ChatReducer,
        Video: VideoReducer,
        Search:SearchReducer
    }
})