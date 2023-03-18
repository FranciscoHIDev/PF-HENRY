import React, { useState, useEffect } from "react";
import { RiGasStationFill } from "react-icons/ri";
import { MdHdrAutoSelect, MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postFavorite } from "../../redux/actions/actions";

function Card({
  brand,
  model,
  price,
  mileage,
  location,
  fuelType,
  transissionType,
  image,
  year,
  type,
  _id,
}) {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();
  const [click, setClick] = useState(false);

  const onClick = () => {
    if (isAuthenticated && user) {
      axios.get("/users").then((e) => {
        const userDB = e.data.find((e) => e.email === user.email);
        const newFavorite = {
          favori: _id,
          email: userDB.email,
        };
        dispatch(postFavorite(newFavorite));
      });
      if (!click) {
        setClick(true);
      } else {
        setClick(false);
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You need to log in to add cars to favourites",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="flex flex-col w-[350px] h-[500px] rounded-lg mb-10 mx-3  bg-zinc-100  items-center shadow-md hover:scale-105">
      <img
        className="rounded-t-lg h-[190px] w-[350px] bg-white"
        src={image}
        alt="image"
      />
      <p className="text-[#FB8500]  mt-1 text-2xl">{type}</p>
      <p className="mt-1 text-2xl text-black mb-2">
        {brand} {model}
      </p>
      <div className="flex flex-row mb-4  items-center">
        <p className="rounded-lg bg-white px-2 mr-2 text-black">{year}</p>
        <p className="rounded-lg bg-white px-2 text-black mr-2">
          {" "}
          {mileage} km
        </p>
        <span
          className="rounded-md bg-white px-1 cursor-pointer "
          onClick={onClick}
        >
          {click ? (
            <MdFavorite className="text-[#ff3252]  text-[22px]" />
          ) : (
            <MdFavoriteBorder className="text-[#FB8500] text-[22px]" />
          )}
        </span>
      </div>
      <div className="flex flex-row mb-1 ">
        <p className="flex mb-2 mr-5 text-black">
          <MdHdrAutoSelect className="text-[#FB8500] text-3xl" />
          <span className="ml-2 ">{transissionType}</span>
        </p>
        <p className="flex mb-2 mr-5 text-black">
          <RiGasStationFill className="text-[#FB8500] text-3xl" />{" "}
          <span className="ml-2">{fuelType}</span>
        </p>
      </div>

      <div className="flex flex-row mb-1">
        <p className="flex mb-2 text-black">
          <MdLocationPin className="text-[#FB8500] text-3xl" />{" "}
          <span className="ml-2">{location}</span>
        </p>
      </div>
      <p className="text-3xl text-black font-bold mb-4">US$ {price}</p>
      <Link to={`/detail/${_id}`}>
        <button className="bg-[rgb(251,133,0)] ">Details</button>
      </Link>
    </div>
  );
}

export default Card;
