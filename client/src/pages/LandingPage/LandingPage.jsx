import React from "react";
import Style from "../LandingPage/LandingPage.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import l1 from "../../assets/carousel-landing/logo1.png";
import selec from "../../assets/carousel-landing/selection.jpg";

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
      <div className="main">
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
        </div>

        <div className={Style.container_2}>
          <h2>Many brands to chose from</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora esse, sed, natus possimus nisi quibusdam autem, deleniti
            excepturi odit facilis. Distinctio, assumenda sequi. Sit odit sapiente eveniet dolore, similique, nobis aliquam, nisi minus
            distinctio magni quidem dolores obcaecati aliquid.
          </p>
          <div className={Style.slider}>
            <div className={Style.slide_track}>
              <div className={Style.con}>
                <div className={Style.slide}>
                  <img src={l1} alt="" />
                </div>
              </div>
              <div className={Style.con}>
                <div className={Style.slide}>
                  <img src={l1} alt="" />
                </div>
              </div>
              <div className={Style.con}>
                <div className={Style.slide}>
                  <img src={l1} alt="" />
                </div>
              </div>
              <div className={Style.con}>
                <div className={Style.slide}>
                  <img src={l1} alt="" />
                </div>
              </div>
              <div className={Style.con}>
                <div className={Style.slide}>
                  <img src={l1} alt="" />
                </div>
              </div>
              <div className={Style.con}>
                <div className={Style.slide}>
                  <img src={l1} alt="" />
                </div>
              </div>
              <div className={Style.con}>
                <div className={Style.slide}>
                  <img src={l1} alt="" />
                </div>
              </div>
              <div className={Style.con}>
                <div className={Style.slide}>
                  <img src={l1} alt="" />
                </div>
              </div>
              <div className={Style.con}>
                <div className={Style.slide}>
                  <img src={l1} alt="" />
                </div>
              </div>
              <div className={Style.con}>
                <div className={Style.slide}>
                  <img src={l1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.footer}></div>
      </div>

      <div className={Style.container_3}>
        <div className={Style.col1}></div>
        <div className={Style.col2}>
          <h2>Go with our newest selection</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis libero deleniti autem at, mollitia eligendi, ipsa
            omnis dolorum delectus eveniet dignissimos ullam soluta perspiciatis iure inventore tempore quaerat similique fugit.
            Praesentium, voluptatem rerum similique officiis assumenda nobis rem necessitatibus dolorem, ex amet repellat harum fugiat error
            sit facere id quos! Veniam vel maiores distinctio voluptate, hic inventore perspiciatis voluptatibus!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
