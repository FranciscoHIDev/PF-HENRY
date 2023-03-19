import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Favorites = () => {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  let myFavorite = [];
  if (isAuthenticated && user) {
    const userDB = allUsers.find((e) => e.email === user.email);
    myFavorite = userDB.favorites;
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="flex flex-col mt-40 mb-40 justify-center">
        <div className="flex mb-3 justify-center">
          <h1 className="">My favourites</h1>
        </div>
        <div className="flex mb-[10px] mt-10 flex-wrap  justify-center ">
          {myFavorite.length !== 0 ? (
            myFavorite.map((c) => {
              return (
                <Card
                  key={crypto.randomUUID()}
                  _id={c._id}
                  type={c.type}
                  image={c.image}
                  brand={c.brand}
                  model={c.model}
                  year={c.year}
                  price={c.price}
                  mileage={c.mileage}
                  location={c.location}
                  fuelType={c.fuelType}
                  transissionType={c.transissionType}
                />
              );
            })
          ) : (
            <p>You have not added cars to favorites yet</p>
          )}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Favorites;
