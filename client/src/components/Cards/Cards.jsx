import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../../redux/actions/actions";
import Card from "../Card/Card";

function Cards() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const allCars = useSelector((state) => state.allCars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <div className="flex  mt-20 mb-12 flex-wrap  justify-center">
      {cars.length !== 0 ? (
        cars.map((c) => {
          return (
            <Card
              key={c.id}
              _id={c._id}
              type={c.type}
              image={c.image}
              brand={c.brand}
              model={c.model}
              year={c.year}
              price={c.price}
              mileage={c.mileage}
              location={c.location}
              fuelType={c.fuelType}
              transissionType={c.transissionType}
            />
          );
        })
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}

export default Cards;
