import React from "react";
import data from "../../data.json";
import Card from "../Card/Card";

function Cards() {
  return (
    <div className="flex  mt-40 mb-12 flex-wrap  justify-center">
      {data.length !== 0 ? (
        data.map((c) => {
          return (
            <Card
              key={c.id}
              type={c.type}
              image={c.image}
              brand={c.brand}
              model={c.model}
              year={c.year}
              price={c.price}
              mileage={c.mileage}
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
