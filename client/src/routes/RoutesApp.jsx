import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Home,
  About,  
  Contact,
  LandingPage,
  NotFound,
  Details,
  Favorites,
} from "../pages/index";
import LayoutAdmin from "../components/LayoutAdmin/LayoutAdmin";
import HomeAdmin from "../components/LayoutAdmin/pages/HomeAdmin";
import UsersAdmin from "../components/LayoutAdmin/pages/UsersAdmin";
import CarsAdmin from "../components/LayoutAdmin/pages/CarsAdmin";
import Bookings from "../components/LayoutAdmin/pages/Bookings";
import ContactsForms from "../components/LayoutAdmin/pages/ContactsForms";
import { FormCar } from "../components/LayoutAdmin/Forms/FormCar";
import LayoutUser from "../components/UserProfile/LayoutUser";
import Myprofile from "../components/UserProfile/pages/MyProfile";
import Playmet from "../pages/Playmet/Playmet";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

function RoutesApp() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="home" element={<Home />} />
        <Route exact path="detail/:id" element={<Details />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="playmet" element={<Playmet />} />
        <Route exact path="favorites" element={<Favorites />} />

        {/* Configuración de rutas del Dashboard  */}
        <Route path="/dashboard" element={<LayoutAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="users" element={<UsersAdmin />} />
          <Route path="cars" element={<CarsAdmin />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="messages" element={<ContactsForms />} />
          <Route path="create-car" element={<FormCar />} />
        </Route>
        {/* Configuración de rutas del Perfil de usuario  */}
        <Route path="/profile" element={<LayoutUser />}>
          <Route index element={<Myprofile />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!isAuthenticated} />}>
          <Route path="/profile" element={<LayoutUser />} />
        </Route>
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default RoutesApp;
