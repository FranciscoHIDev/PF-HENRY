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
        <button className="ml-5 mb-2" onClick={handleSubmit}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Reset;
