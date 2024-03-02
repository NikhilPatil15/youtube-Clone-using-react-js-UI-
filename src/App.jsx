import { useState } from 'react'

import './index.css'
import './App.css'
import {Navbar,SideBar} from './components/index'


function App() {


  return (
    <>
     <div>
      <Navbar/>
      <div className='flex'>
      <SideBar/>
      </div>
     </div>
    </>
  )
}

export default App
