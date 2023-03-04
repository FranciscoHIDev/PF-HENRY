import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import logo from '../../assets/logo-n1.png'

function NavBar() {
  return (
    <>
      <div className=" flex bg-white w-full fixed p-4">
        <div className="container mx-auto ">
          <div className="flex justify-around text-[20px] text-black">
            <Link className="" to="/">
              <img className="h-[50px] w-[150]" src={logo}></img>
            </Link>
            <Link to="/home">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <div className="flex ">
              <Link to="/cart">
                <HiOutlineShoppingBag className="text-3xl mr-4" />
              </Link>
              <Link to="cart">
                <MdFavoriteBorder className="text-3xl" />
              </Link>
            </div>

            <button>Login</button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
