import React from "react";
import Style from "../LandingPage/LandingPage.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import l1 from "../../assets/carousel-landing/logo1.png";
import l2 from "../../assets/carousel-landing/logo2.png";
import l3 from "../../assets/carousel-landing/logo3.png";
import l4 from "../../assets/carousel-landing/logo4.png";
import l5 from "../../assets/carousel-landing/logo5.png";
import l6 from "../../assets/carousel-landing/logo6.png";
import l7 from "../../assets/carousel-landing/logo7.png";
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
      </div>*/}

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
        <h2>
          CHOOSE YOUR <span>BRAND</span>
        </h2>
        <div className={Style.info}>
          <p>
            We provide tailor-made approach to fit your unique requirement and considerations. We offer full support and service on all
            stages of purchase and financing a car of your dream.
          </p>
          <Link to="/home">
            <button>EXPLORE MORE</button>
          </Link>
        </div>

        <div className={Style.slider}>
          <div className={Style.slide_track}>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img1}>
                <img src={l1} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img2}>
                <img src={l2} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img3}>
                <img src={l3} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img4}>
                <img src={l4} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img5}>
                <img src={l5} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img6}>
                <img src={l6} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img7}>
                <img src={l7} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img11}>
                <img src={l1} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img22}>
                <img src={l2} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img33}>
                <img src={l3} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img44}>
                <img src={l4} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img55}>
                <img src={l5} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img66}>
                <img src={l6} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img77}>
                <img src={l7} alt="" />
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
