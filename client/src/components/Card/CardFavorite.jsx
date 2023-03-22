import React, { useState, useEffect } from "react";
import { RiGasStationFill } from "react-icons/ri";
import { MdHdrAutoSelect, MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { postFavorite } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CardFavorite({
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
  let usersRender = useSelector((state) => state.userRender);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useAuth0();

  const onClick = () => {
    const newFavorite = {
      favori: _id,
      email: user.email,
    };
    usersRender = usersRender.filter((e) => e._id !== _id);
    dispatch(postFavorite(newFavorite));
  };

  return (
    <>
      <div className="flex flex-col w-[350px] h-[500px] rounded-lg mb-10 mt-10 mx-3  bg-zinc-100  items-center shadow-md hover:scale-105">
        {/* <button className="bg-red-500" onClick={onClick}>
        X
      </button> */}
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
          <span className="rounded-md bg-white px-1 cursor-pointer ">
            <MdFavorite
              onClick={onClick}
              className="text-[#0d6efd]  text-[22px] hover:text-red-500"
            />
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
    </>
  );
}

export default CardFavorite;
