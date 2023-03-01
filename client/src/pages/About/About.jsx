import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import style from './About.module.css';
import data from "../../data.json";

function About() {
console.log(data)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [, setDetailId] = useState(null);


  return data.hasOwnProperty("name") ? (
    <div className={style.about}>
      <div className={style.back}>
        <Link to='/home'>
          <button>Go Back</button>
        </Link>
      </div>
        <div className={style.container} key={data.id}>
          <h3>brand: {data.brand}</h3>
          <h3>year: {data.year}</h3>
          <h3>color: {data.color}</h3>
          <h3>model: {data.model}</h3>
          <h3>image: {data.image}</h3>
          <h3>transmission: {data.transissionType}</h3>
          <h3>doors: {data.doors}</h3>
          <h3>category: {e.category}</h3>
          <h3>mileage: {e.mileage}</h3>
          <h3>fuelType: {e.fuelType}</h3>
          <h3>desciption: {e.description}</h3>
          <br />
        </div>
    </div>
  ) : <h2>Loading...</h2>
}

export default About