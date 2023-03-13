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
  const auxType = filtroLinks.map(e => e.type)
  const reType = auxType.filter((e, i) => auxType.indexOf(e) === i);

  function handlerPrice(e) {
    dispatch(sortByPrice(e.target.value));
  }
  function handlerDelete(e) {
    dispatch(deletefil(e.target.value))
    dispatch(allFilter())
  }

  function handlerCate(e) {
    dispatch(push({ propety: "category", value: e.target.innerText }))
    dispatch(allFilter());
console.log(reFil)
  }
  function handelrModel(e) {
    dispatch(push({ propety: "model", value: e.target.innerText }))
    dispatch(allFilter());
console.log(reFil)
  }
  function handelrType(e) {
    dispatch(push({ propety: "type", value: e.target.innerText }))
    dispatch(allFilter());
    console.log(reFil)
  }

  return (
    <div className="flex flex-col">
      <select className="bg-white" onChange={handlerPrice} >
        <option hidden >Select</option>
        <option value="mayor">Mayor</option>
        <option value="menor">Menor</option>
      </select> 
      <br />
      <div className="flex flex-wrap" >{reFil[0] && reFil.map((e) => <div className="inline-flex m-1 rounded-md bg-white" key={e.value}><p className="justify-self-start mr-1" >{e.value}</p ><button className="bg-white bg-slate-100 flex justify-self-end text-black text-[12px] hover:bg-white " value={e.value} onClick={handlerDelete}>x</button> </div>)}</div>
      {reFil[0] && reFil.find(e=>e.propety==="category")?null:<div className="my-3"><label className="font-bold block my-2  rounded-lg"  >Category</label>
      {reCategory.map(e => <div className="flex "><p className="hover:cursor-pointer hover:ml-1 text-sm" onClick={handlerCate} >{e}</p> <br /></div>)}</div> }
      {reFil[0] && reFil.find(e=>e.propety==="model")?null:<div className="my-3"><label className="font-bold block my-2  rounded-lg"  >Model</label>
      {reModel.map(e => <div className="flex "><p className="hover:cursor-pointer hover:ml-1 text-sm" onClick={handelrModel} >{e}</p> <br /></div>)}</div>}
      {reFil[0] && reFil.find(e=>e.propety==="type")?null:<div className="my-3"><label className="font-bold block my-2  rounded-lg"  >Type</label>
      {reType.map(e => <div className="flex "><p className="hover:cursor-pointer hover:ml-1 text-sm" onClick={handelrType} >{e}</p> <br /></div>)}</div>}
    </div>
  ) 
}
export default Filters;
