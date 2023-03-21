import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import CardFavorite from "../../components/Card/CardFavorite";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/actions";
import axios from "axios";
import { postFavorite } from "../../redux/actions/actions";

// const all = async () => {
//   const ele = await axios.get("/users");
//   return ele;
// };

export const Favorites = () => {
  const dispatch = useDispatch();

  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { user, isAuthenticated } = useAuth0();
  // let favorite = [];
  // const allUser = useSelector((state) => state.allUsers);
  // if (isAuthenticated) {
  //   const userDB = allUser.find((e) => e.email === user.email);
  //   favorite = userDB.favorites;
  //   //setFavorite(myFavorite);
  // }

  useEffect(() => {
    if (isAuthenticated) {
      axios.get("/users").then((e) => {
        const userDB = e.data.find((e) => e.email === user.email);
        const myFavorite = userDB.favorites;
        setFavorite(myFavorite);
      });
    }
    console.log("se renderizo");
  }, []);

  //Aqui se soluciona las peticiones al user.

  // useEffect(() => {
  //   //misFavoritos();
  //   (async () => {
  //     const ele = await all();
  //     if (isAuthenticated) {
  //       const userDB = ele.data.find((e) => e.email === user.email);
  //       console.log(userDB.favorites);
  //       const myFavorite = userDB.favorites;
  //       setFavorite(myFavorite);
  //     }
  //   })();

  // }, []);

  return (
    <React.Fragment>
      <NavBar />
      <div className="flex flex-col mt-40 mb-40 justify-center">
        <div className="flex mb-3 justify-center">
          <h1 className="">My favourites</h1>
        </div>
        <div className="flex mb-[10px] mt-10 flex-wrap  justify-center ">
          {favorite ? (
            favorite.map((c) => {
              return (
                <CardFavorite
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
