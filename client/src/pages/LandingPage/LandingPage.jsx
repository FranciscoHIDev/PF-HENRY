import React from "react";
import Style from "../LandingPage/LandingPage.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
function LandingPage() {
  const [lenguaje, setLenguje] = React.useState({
    titulo: "The place where you buy your car",
    boton: "Go!",
  });
  function onButtonClick(e) {
    e.target.value === "EN"
      ? setLenguje({
          titulo: "The place where you buy your car",
          boton: "GO!",
        })
      : setLenguje({
          titulo: "EL sitio donde compras tu auto!",
          boton: "Entrar!",
        });

    e.target.value === "EN"
      ? setLenguje({
          titulo: "The site You can buy your car",
          boton: "GO!",
        })
      : setLenguje({
          titulo: "EL sitio donde compras tu auto",
          boton: "Entrar!",
        });
  }
  return (
    <>
      <NavBar />
      <div className={Style.container}>
        <div className={Style.botones}>
          {/* <button className=" mr-2" onClick={onButtonClick} value="EN">
          EN
        </button>
        <button className=" mr-2" onClick={onButtonClick} value="ES">
          ES
        </button> */}
        </div>

        <div className={Style.titulo}>
          <h1>{lenguaje.titulo}</h1>
        </div>
        <div className={Style.boxBtn}>
          <Link to="/home">
            <button>{lenguaje.boton}</button>
          </Link>
        </div>
        <div className={Style.footer}></div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
