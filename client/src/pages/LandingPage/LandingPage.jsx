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

      <div className={Style.container}>
        {/* <div className={Style.botones}>
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
        </div>*/}
        <video className={Style.back_video} autoPlay loop muted>
          <source
            src="https://prod-streaming-video-msn-com.akamaized.net/a8c412fa-f696-4ff2-9c76-e8ed9cdffe0f/604a87fc-e7bc-463e-8d56-cde7e661d690.mp4"
            type="video/mp4"
          />
        </video>
        <div className={Style.content}>
          <h1>RENT A CAR FROM $20 PER DAY</h1>
          <Link to="/home">
            <button className={Style.button}>Start</button>
          </Link>
        </div>
      </div>

      <div className={Style.container_2}>
        <h2>Many brands to chose from</h2>
        <p>
          We provide tailor-made approach to fit your unique requirement and considerations. We offer full support and service on all stages
          of purchase and financing a car of your dream. You may choose any model available in our showroom or from our partners
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

      <div className={Style.container_3}>
        <div className={Style.col1}></div>
        <div className={Style.col2}>
          <h2>Go with our newest selection</h2>
          <p>
            Our cars stand for automotive extravagance - more power, more comfort and more expertise. An exclusive selection in the sports
            cars and luxury segment as well as the appropriate service focus for correspondingly high demands. In addition to prestigious
            and traditional brands such as Ferrari, Lamborghini, Bentley, Porsche, Land Rover and Mercedes, we provide classics designs to
            limited model variants. High-class tuning and procurement of rare model series are also possible.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
