import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, LandingPage, NotFound } from "../pages/index";

function RoutesApp() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RoutesApp;
