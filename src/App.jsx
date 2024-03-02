import { useState } from "react";

import "./index.css";
import "./App.css";
import { Navbar, SideBar, Feed } from "./components/index";

function App() {
  return (
    <>
      <div className='mt-0'>
        <Navbar />
        <div className="flex">
          <SideBar />
          <Feed />
        </div>
      </div>
    </>
  );
}

export default App;
