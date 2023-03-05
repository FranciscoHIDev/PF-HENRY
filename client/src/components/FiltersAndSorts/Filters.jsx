import React, { useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { categoryFilter, filterByTransissionType, sortByPrice } from "../../redux/actions/actions";
import Reset from "../../components/Reset/Reset";

function Filters() {
  const cars = useSelector(state => state.allCars);
  const dispatch = useDispatch();

  const data = cars.map(e => e.category);
  const fullData = data.filter((e,i) => data.indexOf(e) === i);
  let copia = [...cars]

  const arrayData = [];
  for(let i = 0; i < data; i++) {
    arrayData.push()
  }

  function handlerPrice(e) {
    dispatch(sortByPrice(e.target.value));
  }

  function handlerCategory(e) {
    dispatch(categoryFilter(e.target.value));
  }

  function handlerTransission(e) {
    dispatch(filterByTransissionType(e.target.value))
  }

  return (
    <div className="m-[200px]">
      <select onChange={handlerPrice} >
        <option hidden >Price</option>
        <option value="mayor">Mayor</option>
        <option value="menor">Menor</option>
      </select>
      <select onChange={handlerCategory} >
        <option hidden >Category</option>
        {
          fullData.map(e => {
            return (
              <option value={e}>{e}</option>
            )
          })                                    
        }
      </select>
      <select onChange={handlerTransission} >
        <option hidden >TransissionType</option>
        <option value="automatic">automatic</option>
        <option value="handbook">handbook</option>
        {/* <option value="triptonic">Triptonic</option> */}
      </select>
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
   </div> 
  );
}
export default Filters;
