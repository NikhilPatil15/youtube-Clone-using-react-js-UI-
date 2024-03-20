import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './redux/Store/store.js'
import { Feed, Home, PlayingVideo } from "./components/index";
import { createBrowserRouter, createRoutesFromChildren , Route, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element={<App/>}>
        <Route index path="/" element={<Feed/>}/>
        <Route path="/video" element={<PlayingVideo/>}/>
      </Route>
    )
  )
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
                <RouterProvider router={router}/>
    </Provider>
)
