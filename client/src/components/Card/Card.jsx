import React from "react";
import { RiGasStationFill } from "react-icons/ri";
import { MdHdrAutoSelect, MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
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
  _id
}) {
  return (
    <div className="flex flex-col w-[360px] h-[500px] rounded-lg mb-12 mx-4  bg-zinc-100  items-center shadow-md ">
      <img
        className="rounded-t-lg h-[190px] w-[360px] bg-white"
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
        <p className="rounded-md bg-white px-1 ">
          <MdFavoriteBorder className="text-[#FB8500] cursor-pointer  text-[22px]" />
        </p>
      </div>
      <div className="flex flex-row mb-1">
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
        <button className="bg-[rgb(251,133,0)] ">Detalles</button>
      </Link>
    </div> 
  );
}

export default Card;
