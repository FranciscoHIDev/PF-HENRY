import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars, sortByPrice } from "../../redux/actions/actions";

function Filters() {
  const dispatch = useDispatch();

  function handlerPrice(e) {
    dispatch(sortByPrice(e.target.value));
  }

  return (
    <div className="mt-[15px] ml-40 ">
      <select
        className="bg-white text-2xl px-10 rounded-md"
        onChange={handlerPrice}
      >
        <option hidden>Select</option>
        <option value="mayor">Mayor</option>
        <option value="menor">Menor</option>
      </select>
    </div>
  );
}
export default Filters;
