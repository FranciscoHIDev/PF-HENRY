import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

function About() {
  const { id } = useParams();
  const dispatch = useDispatch();

  return (
    <>
      <NavBar />

      <div>
        <div>
          <Link to="/home">
            <button>Go Back</button>
          </Link>
        </div>
        <h3>año</h3>
        <h3>color</h3>
        <h3>modelo</h3>
        <h3>imagen</h3>
        <h3>tipo de transmision</h3>
        <h3>numero de puertas</h3>
        <h3>categoria</h3>
        <h3>kilometraje</h3>
        <h3>tipo de combustible</h3>
        <h3>descripcion</h3>
      </div>
    </>
  );
}

export default About;
