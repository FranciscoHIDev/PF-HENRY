import React from "react";
import { RiGasStationFill } from "react-icons/ri";
import { MdHdrAutoSelect } from "react-icons/md";
import { Link } from "react-router-dom";

function Card({
  brand,
  model,
  price,
  mileage,
  fuelType,
  transissionType,
  image,
  year,
  type,
}) {
  return (
    <div className="flex flex-col w-[340px] h-[450px] rounded-lg mb-12 mx-4  bg-zinc-400 items-center shadow-md ">
      <img className="rounded-t-lg h-auto" src={image} alt="image" />
      <p className="text-[#FB8500]  mt-1 text-2xl">{type}</p>
      <p className="mt-1 text-2xl text-black mb-2">
        {brand} {model}
      </p>
      <div className="flex flex-row mb-4 ">
        <p className="rounded-lg bg-white px-2 mr-2 text-black">{year}</p>
        <p className="rounded-lg bg-white px-2 text-black"> {mileage} km</p>
      </div>
      <div className="flex flex-row mb-3">
        <p className="flex mb-2 mr-6 text-black">
          <MdHdrAutoSelect className="text-[#FB8500] text-2xl" />
          <span className="ml-2">{transissionType}</span>
        </p>
        <p className="flex mb-2 text-black">
          <RiGasStationFill className="text-[#FB8500] text-2xl" />{" "}
          <span className="ml-2">{fuelType}</span>
        </p>
      </div>

      <p className="text-3xl text-black font-bold mb-4">$ {price}</p>
    
      <Link to={`/detail/${model}`}>
        <button className="bg-[rgb(251,133,0)] ">Detalles</button>
      </Link>
    </div>
  );
}

export default Card;
