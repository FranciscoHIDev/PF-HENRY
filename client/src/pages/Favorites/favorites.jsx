import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRender } from "../../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import CardFavorite from "../../components/Card/CardFavorite";

const Favorites = () => {
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

  if (isAuthenticated) {
    axios.get("/users").then((e) => {
      const userDB = e.data.find((e) => e.email === user.email);
      const myFavorite = userDB.favorites;
      setFavorite(myFavorite);
    });
  }

  //----------falta arreglar----------------
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     dispatch(userRender(user.email));
  //   }
  // }, []);
  // const { user, isAuthenticated } = useAuth0();
  // const dispatch = useDispatch();
  // const usersRender = useSelector((state) => state.userRender);
  // console.log(usersRender, "usuario");
  // if (usersRender.length !== 0) {
  //   var fav = usersRender[0].favorites;
  // }

  // console.log(fav, "uuuu");

  // console.log(usersRender);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Favorites;
