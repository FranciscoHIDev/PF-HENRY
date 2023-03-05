import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars, sortByPrice } from "../../redux/actions/actions";
import Reset from "../../components/Reset/Reset";

function Filters() {
  const dispatch = useDispatch();

  function handlerPrice(e) {
    dispatch(sortByPrice(e.target.value));
  }

  return (
    <div className=" flex flex-row mt-[120px] ml-40 ">
      <select
        className="bg-white text-2xl px-10 rounded-md mr-4"
        onChange={handlerPrice}
      >
        <option hidden>Select</option>
        <option value="mayor">Mayor</option>
        <option value="menor">Menor</option>
      </select>
      <Reset />
    </div>
  );
}
export default Filters;
