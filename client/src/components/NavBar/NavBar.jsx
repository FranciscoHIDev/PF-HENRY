import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import logo2 from "../../assets/logo-n2.png";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./../Auth0/LogoutButton";
import LoginButton from "./../Auth0/LoginButton";
import UserProfile from "../UserProfile/HeaderUser";

function NavBar() {
  const { isAuthenticated, user, logout } = useAuth0();
  return (
    <React.Fragment>
      <div className=" flex bg-white w-full fixed p-3 z-10">
        <div className="container">
          <div className="flex  text-[20px] text-black items-center">
            <div className="flex items-center mr-40 ml-10 ">
              <Link className="" to="/">
                <img className="w-[130px] h-[53px] pt-1" src={logo2} alt="logo" />
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
          <Link to="/favorites">
            <MdFavoriteBorder className="text-3xl mr-4" />
          </Link>

          <Link to="userProfile">
            <button>UserProfile</button>
          </Link>
          {isAuthenticated ? <button onClick={logout}>Logout</button> : <LoginButton />}
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
}

export default NavBar;
