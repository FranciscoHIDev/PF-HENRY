import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { allFilter, deletefil, getAllCars, push, sortByPrice } from "../../redux/actions/actions";

function Filters() {
  const reFil = useSelector(state => state.filtros);
  const dispatch = useDispatch();
  let filtroLinks = useSelector(state => state.cars)
  const auxCategory = filtroLinks.map(e => e.category)
  const reCategory = auxCategory.filter((e, i) => auxCategory.indexOf(e) === i);
  const auxModel = filtroLinks.map(e => e.model)
  const reModel = auxModel.filter((e, i) => auxModel.indexOf(e) === i);

  function handlerPrice(e) {
    dispatch(sortByPrice(e.target.value));
  }
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
}
export default Filters;
