import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRender } from "../../../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";

const Favorites = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const usersRender = useSelector((state) => state.userRender);
  // const favorite = usersRender[0].favorites;
  console.log(usersRender, "usuario");

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(userRender(user.email));
      console.log(user);
    }
  }, [!usersRender.length]);

  console.log(usersRender);

  return (
    <React.Fragment>
      <div className="flex mt-40 mb-40 justify-center">
        <h1 className="">
          {usersRender.length &&
            usersRender.map((e) => {
              <h2>{e}</h2>;
            })}
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Favorites;
