import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home, About, Contact, LandingPage, Details} from "../pages/index";
import UserProfile from "../components/UserProfile/UserProfile";

function RoutesApp() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="detail/:id" element={<Details />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="*" element={<d />} />
        <Route exact path="/home/userProfile/" element={<UserProfile/>} />
      </Routes>
    </> 
  );
}

export default RoutesApp;
