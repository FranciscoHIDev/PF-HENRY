import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { allFilter, getAllCars, push, sortByPrice } from "../../redux/actions/actions";

function Filters() {
  const dispatch = useDispatch();
let filtroLinks = useSelector(state => state.cars)
 const auxCategory = filtroLinks.map(e=> e.category)
 const reCategory = auxCategory.filter((e,i)=>auxCategory.indexOf(e) === i);
 const auxModel = filtroLinks.map(e=> e.model)
 const reModel = auxModel.filter((e,i)=>auxModel.indexOf(e) === i);
 
  function handlerPrice(e) {
    dispatch(sortByPrice(e.target.value));
  }
 
  
  function handelrCate (e) {
    dispatch(push({propety:"category",value:e.target.innerText}))
    dispatch(allFilter());
    console.log(arryfiltros)
  }
  function handelrModel (e) {
    dispatch(push({propety:"model",value:e.target.innerText}))
    dispatch(allFilter());
    console.log(arryfiltros)
  }

  return (
    <div className="m-[200px] flex flex-col pl-0">
      <select onChange={handlerPrice} >
        <option hidden >Select</option>
        <option value="mayor">Mayor</option>
        <option value="menor">Menor</option>
      </select>
      <br />
      <label>Category</label><br />
    {reCategory.map(e=><><a onClick={handelrCate} >{e}</a> <br /></>)}
      <label>Model</label><br />
      {reModel.map(e=><><a onClick={handelrModel} >{e}</a> <br /></>)}
    </div>
  )
}
export default Filters;
