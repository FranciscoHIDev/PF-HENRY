import NavBar from "../../components/NavBar/NavBar";
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './About.module.css';
import data from "../../data.json";
import { useLocation } from "react-router-dom";

function About() {
  const dispatch = useDispatch();
  const [state, setState] = useState();

  return (
    <div className={style.about}>
        <NavBar/>
        <div className={style.container}>
          <h3>brand: {data.brand}</h3>
          <h3>year: {data.year}</h3>
          <h3>color: {data.color}</h3>
          <h3>model: {data.model}</h3>
          <h3>image: {data.image}</h3>
          <h3>transmission: {data.transissionType}</h3>
          <h3>doors: {data.doors}</h3>
          <h3>category: {data.category}</h3>
          <h3>mileage: {data.mileage}</h3>
          <h3>fuelType: {data.fuelType}</h3>
          <h3>desciption: {data.description}</h3>
          <br />
      </div>
    </div>
  ) 
}

export default About;
