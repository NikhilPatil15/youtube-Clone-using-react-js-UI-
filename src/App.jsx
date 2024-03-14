import { useState } from "react";

import "./index.css";
import "./App.css";
import { Navbar, SideBar, Feed, Home, PlayingVideo } from "./components/index";


function App() {
  return (
    <>
      <div className='mt-0'>
        <Navbar />
          <Home/>
      </div>
    </>
  );
}

export default App;
