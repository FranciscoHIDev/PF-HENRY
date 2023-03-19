import React from "react";
import { Outlet } from "react-router-dom";
import SideBarUser from "../UserProfile/SideBarUser";
import HeaderUser from "./HeaderUser.jsx";

function LayoutUser() {
  
  return (
    <>
      <div className="bg-secondary-900 min-h-screen grid  grid-cols-1 xl:grid-cols-6">
        <SideBarUser/>
        <div className="xl:col-span-5">
          <HeaderUser/>
          <div className="h-[90vh]  p-8  overflow-y-scroll">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutUser;
