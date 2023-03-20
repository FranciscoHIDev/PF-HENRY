import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import logo2 from "../../assets/logo-n2.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./../Auth0/LoginButton";
import { RiArrowDownSLine, RiLogoutCircleRLine, RiProfileLine } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/actions";

function NavBar() {
  const { isAuthenticated, user, logout } = useAuth0();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && isAuthenticated) {
      axios.get("/users").then((element) => {
        const userDb = element.data.find((element) => element.email === user.email);
        console.log(userDb);
        if (userDb) {
          return false;
        } else {
          const newUser = {
            name: user.name,
            lastname: user.family_name,
            email: user.email,
          };
          dispatch(createUser(newUser));
        }
      });
    }
  }, [user]);

  return (
    <React.Fragment>
      <div className="flex flex-col lg:flex-row lg:justify-between bg-white w-full fixed p-3 z-10">
        <div className="flex justify-center items-center lg:[margin-right:12%] lg:ml-10 ">
          <Link className="w-[195px] lg:w-[130px]" to="/">
            <img className="w-[195px] h-[79px] lg:w-[130px] lg:h-[53px] pt-1" src={logo2} alt="logo" />
          </Link>
        </div>
        <div className="flex justify-between lg:w-4/5 text-[20px] text-black items-center [padding-left:5%] lg:px-0">
          <div className="flex w-4/5">
            <Link className="[margin-right:calc(30%-100px)] lg:mr-10" to="/home">
              HOME
            </Link>
            <Link className="[margin-right:calc(30%-100px)] lg:mr-10" to="/playmet">
              Playmet
            </Link>
            <Link className="[margin-right:calc(30%-100px)] lg:mr-10" to="/about">
              ABOUT
            </Link>
            <Link className="[margin-right:calc(30%-100px)] lg:mr-10" to="/contact">
              CONTACT
            </Link>
          </div>
          <div className="flex items-center justify-end mr-2 lg:mr-8">
            {/* <Link to="/cart">
            <HiOutlineShoppingBag className="text-3xl mr-4" />
          </Link> */}
            <Link to="/favorites">
              <MdFavoriteBorder className="text-3xl mr-4" />
            </Link>

            {isAuthenticated && user ? (
              <>
                {" "}
                <nav>
                  <Menu
                    menuButton={
                      <MenuButton className="flex bg-primary items-center gap-x-2 hover:bg-[#0d6efd]  rounded-lg transition-colors pl-3 pr-5">
                        <img src={user.picture} alt={user.given_name} className="w-6 h-6 object-cover rounded-full" />
                        <p className="flex">
                          Hi!
                          <span className="ml-1">{user.given_name || user.name}</span>
                        </p>
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
                        to="/profile"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                      >
                        <img src={user.picture} alt={user.given_name} className="w-8 h-8 object-cover rounded-full" />
                        <div className="flex flex-col text-sm">
                          <span className="text-sm">{user.given_name} </span>
                          <span className="text-xs text-gray-500">{user.email}</span>
                        </div>
                      </Link>
                    </MenuItem>
                    <hr className="my-4 border-gray-500" />
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to="/profile"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                      >
                        <RiProfileLine /> My Profile
                      </Link>
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to="/favorites"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                      >
                        <MdOutlineFavorite /> Favorites
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
              </>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
}

export default NavBar;
