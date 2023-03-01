
import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <>
      <RoutesApp />


//import RoutesApp from "./routes/RoutesApp.jsx";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, LandingPage, NotFound } from "./pages/index"; 

// import RoutesApp from "./routes/RoutesApp";
import Cards from "./components/Cards/Cards"
function App() {
  return (
    <>
      {/* <RoutesApp /> */}

    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="home" element={<Home />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="contact" element={<Contact />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
      <Cards/>

    </>
  );
}

export default App;
