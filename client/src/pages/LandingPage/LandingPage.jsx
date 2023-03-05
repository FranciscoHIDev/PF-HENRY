import React from "react";
import Style from "../LandingPage/LandingPage.module.css";
import { Link } from "react-router-dom";
import NavBar from '../../components/NavBar/NavBar'
import Footer from "../../components/Footer/Footer";
function LandingPage() {
  const [lenguaje, setLenguje] = React.useState({
    titulo: "EL sitio donde compras tu auto",
    boton: "Entrar!",
  });
  function onButtonClick(e) {

    e.target.value === "EN" ?
      setLenguje({
        titulo: "The site You can buy yor Car",
        boton: "GO!"
      }) : setLenguje({
        titulo: "EL sitio donde compras tu auto!",
        boton: "Entrar!"
      })


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
    <div className={Style.container}>
      <div className={Style.botones}>
        <NavBar onButtonClick={onButtonClick} className="w-100vw"/>
        {/* <button className=" mr-2" onClick={onButtonClick} value="EN">
          EN
        </button>
        <button className=" mr-2" onClick={onButtonClick} value="ES">
          ES
        </button> */}
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
      <div className={Style.footer}>
        <Footer/>
      </div>      
    </div>

  );
}

export default LandingPage;
