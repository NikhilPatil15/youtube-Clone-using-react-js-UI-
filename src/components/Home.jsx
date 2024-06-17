import React,{useEffect} from "react";
import SideBar from "./SideBar";

import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";
const Home = () => {
  return (
    <div className={`flex`}>
      <SideBar />
      <Outlet/>
    </div>
  );
};

export default Home;
