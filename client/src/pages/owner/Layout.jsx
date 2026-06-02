import React,{useEffect} from "react";
import NavbarOwner from "../../components/owner/NavbarOwner";
import Sidebar from "../../components/owner/Sidebar";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../../context/Appcontext.jsx";
const Layout = () => {
  const {user,isOwner,navigate} = useAppContext();
  useEffect(()=>{
    if(user && !isOwner){
      navigate("/");
    }
  },[isOwner,user])
  return (
    <div className="flex flex-col">
      <NavbarOwner />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
