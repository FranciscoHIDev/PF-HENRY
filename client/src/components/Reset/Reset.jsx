import React from "react";
import { useDispatch } from "react-redux";
import { getAllCars } from "../../redux/actions/actions";

function Reset() {
  const dispatch = useDispatch();
  function handleSubmit() {
    dispatch(getAllCars());
  }

  return (
    <>
      <div>
        <button onClick={handleSubmit}>Reset</button>
      </div>
    </>
  );
}

export default Reset;
