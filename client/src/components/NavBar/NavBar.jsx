import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import logo2 from "../../assets/logo-n2.png";
function NavBar() {



  return (
    <React.Fragment>
      <div className=" flex bg-white w-full fixed p-3 ">
        <div className="container">
          <div className="flex  text-[20px] text-black items-center">
            <div className="flex items-center mr-40 ml-10 ">
              <Link className="" to="/">
                <img
                  className="w-[130px] h-[53px] pt-1"
                  src={logo2}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex">
              <Link className="mr-10" to="/home">
                HOME
              </Link>
              <Link className="mr-10" to="/about">
                ABOUT
              </Link>
              <Link className="mr-10" to="/contact">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mr-10">
          <Link to="/cart">
            <HiOutlineShoppingBag className="text-3xl mr-4" />
          </Link>
          <Link to="cart">
            <MdFavoriteBorder className="text-3xl mr-4" />
          </Link>
          <div>
            <button >Login</button>
          </div>
          
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
}

export default NavBar;
