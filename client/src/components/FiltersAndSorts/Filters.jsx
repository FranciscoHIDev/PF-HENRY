import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {allFilter,getAllCars,push,sortByPrice,} from "../../redux/actions/actions";
import Reset from "../../components/Reset/Reset";

function Filters() {
  const cars = useSelector((state) => state.allCars);
  const dispatch = useDispatch();
  let filtroLinks = useSelector((state) => state.cars);
  const auxCategory = filtroLinks.map((e) => e.category);
  const reCategory = auxCategory.filter((e, i) => auxCategory.indexOf(e) === i);
  const auxModel = filtroLinks.map((e) => e.model);
  const reModel = auxModel.filter((e, i) => auxModel.indexOf(e) === i);

  function handlerPrice(e) {
    dispatch(sortByPrice(e.target.value));
  }

  function handelrCate(e) {
    dispatch(push({ propety: "category", value: e.target.innerText }));
    dispatch(allFilter());
    console.log(arryfiltros);
  }
  function handelrModel(e) {
    dispatch(push({ propety: "model", value: e.target.innerText }));
    dispatch(allFilter());
    console.log(arryfiltros);
  }

  return (
    <React.Fragment>
      <div className="flex flex-col ">
        <Reset />
        <p className="text-2xl mb-2 ml-3 font-extrabold">Filters:</p>
        <select
          key={crypto.randomUUID()}
          className="bg-white p-2 w-[100px] rounded-md text-2xl font-bold"
          onChange={handlerPrice}
        >
          <option disabled selected value="">
            Price
          </option>
          <option className=" text-black font-medium text-lg " value="mayor">
            Higher
          </option>
          <option className=" text-black font-medium text-lg" value="menor">
            Lower
          </option>
        </select>

        <br />
        <label className="  font-bold text-2xl">Category</label>
        <br />
        {reCategory.map((e) => (
          <>
            <button onClick={handelrCate}>{e}</button> <br />
          </>
        ))}
        <label className="  font-bold text-2xl">Model</label>
        <br />
        {reModel.map((e) => (
          <>
            <button onClick={handelrModel}>{e}</button> <br />
          </>
        ))}
      </div>
    </React.Fragment>
  );
}
export default Filters;
