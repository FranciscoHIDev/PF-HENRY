import React from "react";
import {
  RiArrowDownSLine,
  RiLogoutCircleRLine,
  RiProfileLine,
} from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegCalendarAlt, FaArrowCircleRight } from "react-icons/fa";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
import logo2 from "../../assets/logo4.png";
//import Style from '../UserProfile/HeaderUser.module.css'



const HeaderUser = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  return (
    isAuthenticated && (
      <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
        <nav className="flex items-center gap-2">
          <img
            className="w-[130px] h-[50px] items-start mr-[530px]"
            src={logo2}
            alt="logo"
          />

          <Link
            to="/home"
            className="flex  items-center gap-4  p-[0.2em] bg-primary rounded-lg w-full hover:bg-[#0d6efd]"
          >
            <p className="ml-2 text-white font-bold">Go Home</p>
            <FaArrowCircleRight className="text-white" />
          </Link>

          <button className="items-center flex gap-x-2 text-white font-bold hover:text-white">
            <FaRegCalendarAlt className="hover-white" />
            {`${day}/${month}/${year}`}
          </button>
          <Menu
            menuButton={
              <MenuButton
                className="flex bg-primary items-center gap-x-2
               transition-colors text-white font-bold hover:text-white"
              >
                <img
                  src={user.picture}
                  alt={user.given_name}
                  className="w-6 h-6 object-cover rounded-full"
                />
                <span >{user.given_name}</span>
                <RiArrowDownSLine />
              </MenuButton>
            }
            align="end"
            arrow
            arrowClassName="bg-secondary-100"
            transition
            menuClassName="bg-secondary-100 p-4"
          >
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="#"
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
              >
                <img
                  src={user.picture}
                  alt={user.given_name}
                  className="w-8 h-8 object-cover rounded-full"
                />
                <div className="flex flex-col text-sm">
                  <span className="text-sm">{user.given_name} </span>
                  <span className="text-xs text-gray-500">{user.email}</span>
                </div>
              </Link>
            </MenuItem>
            <hr className="my-4 border-gray-500" />
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="/dashboard"
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
              >
                <RiProfileLine /> My Profile
              </Link>
            </MenuItem>
            <MenuItem className="p-0 hover:bg-transparent">
              <Link
                to="#"
                onClick={() => logout({ returnTo: window.location.origin })}
                className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
              >
                <RiLogoutCircleRLine /> Log Out
              </Link>
            </MenuItem>
          </Menu>
        </nav>
      </header>
    )
  );
};

export default HeaderUser;
