import React from "react";
import Style from "../LandingPage/LandingPage.module.css";
import { Link } from "react-router-dom";

function LandingPage() {
  const [lenguaje, setLenguje] = React.useState({
    titulo: "EL sitio donde compras y Vendes",
    boton: "Entrar!",
  });

  function onButtonClick(e) {

    e.target.value === "EN" ?
      setLenguje({
        titulo: "The site You can buy an sell",
        boton: "GO!"
      }) : setLenguje({
        titulo: "EL sitio donde compras y Vendes",
        boton: "Entrar!"
      })


    e.target.value === "EN"
      ? setLenguje({
          titulo: "The site You can buy an sell",
          boton: "GO!",
        })
      : setLenguje({
          titulo: "EL sitio donde compras y Vendes",
          boton: "Entrar!",
        });

  }

  return (
    <div className={Style.container}>
      <div className={Style.botones}>
        <button className=" mr-2" onClick={onButtonClick} value="EN">
          EN
        </button>
        <button className=" mr-2" onClick={onButtonClick} value="ES">
          ES
        </button>
      </div>
      <div className={Style.titulo}>
        <h1>{lenguaje.titulo}</h1>
      </div>
      <div className={Style.boxBtn}>
        <Link to="/home">
          <button>{lenguaje.boton}</button>
        </Link>
      </div>
    </div>



  );
}

export default LandingPage;
