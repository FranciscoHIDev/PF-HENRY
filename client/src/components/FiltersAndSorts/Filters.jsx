import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { allFilter, deletefil, getAllCars, push, sortByPrice } from "../../redux/actions/actions";

function Filters() {
  const reFil = useSelector(state => state.filtros);
  const dispatch = useDispatch();
  let filtroLinks = useSelector(state => state.cars)
  const auxCategory = filtroLinks.map(e => e.category)
  const reCategory = auxCategory.filter((e, i) => auxCategory.indexOf(e) === i);
  const auxModel = filtroLinks.map(e => e.model)
=======
import { useDispatch, useSelector } from "react-redux";
import {
  allFilter,
  getAllCars,
  push,
  sortByPrice,
} from "../../redux/actions/actions";
import Reset from "../../components/Reset/Reset";

function Filters() {
  const cars = useSelector((state) => state.allCars);
  const dispatch = useDispatch();
  let filtroLinks = useSelector((state) => state.cars);
  const auxCategory = filtroLinks.map((e) => e.category);
  const reCategory = auxCategory.filter((e, i) => auxCategory.indexOf(e) === i);
  const auxModel = filtroLinks.map((e) => e.model);
>>>>>>> e734b4ba7c4040606f9ceb905d20e482e3939e01
  const reModel = auxModel.filter((e, i) => auxModel.indexOf(e) === i);

  function handlerPrice(e) {
    dispatch(sortByPrice(e.target.value));
  }
<<<<<<< HEAD
  function handlerDelete(e) {
    dispatch(deletefil(e.target.value))
    dispatch(allFilter())
  }

  function handelrCate(e) {
    dispatch(push({ propety: "category", value: e.target.innerText }))
    dispatch(allFilter());
    console.log(reFil)
  }
  function handelrModel(e) {
    dispatch(push({ propety: "model", value: e.target.innerText }))
    dispatch(allFilter());
    console.log(reFil)
  }

  return (
    <div className="m-[200px] flex flex-col pl-0">
      <select onChange={handlerPrice} >
        <option hidden >Select</option>
        <option value="mayor">Mayor</option>
        <option value="menor">Menor</option>
      </select>
      <br />
      <div>{reFil[0] && reFil.map((e) => <div key={e.value}><p>{e.value}</p><button value={e.value} onClick={handlerDelete}>x</button> </div>)}</div>
      {reFil[0] && reFil.find(e=>e.propety==="category")?null:<div><label>Category</label><br />
      {reCategory.map(e => <div><a onClick={handelrCate} >{e}</a> <br /></div>)}</div> }
      {reFil[0] && reFil.find(e=>e.propety==="model")?null:<div><label>Model</label><br />
      {reModel.map(e => <div><a onClick={handelrModel} >{e}</a> <br /></div>)}</div>}
      
    </div>
  )
=======

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
>>>>>>> e734b4ba7c4040606f9ceb905d20e482e3939e01
}
export default Filters;
