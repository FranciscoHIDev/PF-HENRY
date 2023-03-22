import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../../redux/actions/actions";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import SideBar from "./../SideBar/SideBar";

function Cards() { 
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  const carsValid = [];
  cars.map((car) => {
    car.status === "valid" ? carsValid.push(car) : null;
  });

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const [carPerPage] = useState(6);

  const lastCar = page * carPerPage;
  const firstCar = lastCar - carPerPage;
  const totalCars = carsValid.slice(firstCar, lastCar);

  const maxPage = Math.ceil(carsValid.length / carPerPage);

  function paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  return (
    <React.Fragment>
      <SearchBar setPage={setPage} />

      <div className="flex ">
        <div className="mr-10">
          <SideBar  setPage={setPage} className="justify-self-start mr-3" />
        </div>
        <div className="flex mb-[10px] mt-20 flex-wrap  justify-center ">
          {totalCars.length !== 0 ? (
            totalCars.map((c) => {
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
            <Loading />
          )}
        </div>
      </div>
      <div>
        <Pagination
          carPerPage={carPerPage}
          cars={carsValid.length}
          paginate={paginate}
          setPage={setPage}
          page={page}
          maxPage={maxPage}
        />
      </div>
    </React.Fragment>
  );
}

export default Cards;
