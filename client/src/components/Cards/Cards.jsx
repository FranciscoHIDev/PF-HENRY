import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../../redux/actions/actions";
import Card from "../Card/Card";
import Loading from '../Loading/Loading'

function Cards() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="flex  mt-20 mb-12 flex-wrap  justify-center">
        {cars.length !== 0 ? (
          cars.map((c) => {
            return (
              <Card
                key={crypto.randomUUID()}
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
          <Loading/>
        )}
      </div>
    </React.Fragment>
  );
}

export default Cards;
