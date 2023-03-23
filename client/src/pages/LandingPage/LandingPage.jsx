import React ,{  useEffect } from "react";
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
import l8 from "../../assets/carousel-landing/logo8.png";
import member from "../../assets/carousel-landing/t-member.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/actions/actions";

function LandingPage() { 
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers())
  },[])
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
              <div className={Style.slide} id={Style.img8}>
                <img src={l8} alt="" />
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
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img88}>
                <img src={l8} alt="" />
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

      <div className="text-center p-10 bg-slate-50">
        <h2 className="font-bold text-3xl tracking-wide text-cyan-800">Meet our team members</h2>
        <p className="w-3/5 mx-auto mt-4 mb-7 tracking-wider">
          This project would not have been possible without these 6 people, who always pursued the idea of making something out of the box.
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-80 shadow-md bg-white p-5 rounded-2xl">
            <div className="flex my-3">
              <div className="rounded-full bg-slate-400" style={{ height: "50px", width: "50px" }}>
                <img src={member} />
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3 className="font-bold">Ramiro Espinosa</h3>
                <p className="font-bold tracking-wider" style={{ color: "#4a3aff" }}>
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className="text-left tracking-wider">Constantly looking for ways to improve productivity.</p>
            <div className="flex mt-2">
              <a className="m-3 ml-0" href="https://github.com/RamiroE1" target="_blank">
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a className="m-3" href="https://www.linkedin.com/in/ramiro-espinosa-gallo-438064105" target="_blank">
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
          <div className="w-80 shadow-md bg-white p-5 rounded-2xl">
            <div className="flex my-3">
              <div className="rounded-full bg-slate-400" style={{ height: "50px", width: "50px" }}>
                <img src={member} />
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3 className="font-bold">Isidoro Francisco</h3>
                <p className="font-bold tracking-wider" style={{ color: "#4a3aff" }}>
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className="text-left tracking-wider">Highly motivated researcher of the web stack.</p>
            <div className="flex mt-2">
              <a className="m-3 ml-0" href="https://github.com/FranciscoHIDev" target="_blank">
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a className="m-3" href="https://www.linkedin.com/in/isidoro-francisco" target="_blank">
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
          <div className="w-80 shadow-md bg-white p-5 rounded-2xl">
            <div className="flex my-3">
              <div className="rounded-full bg-slate-400" style={{ height: "50px", width: "50px" }}>
                <img src={member} />
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3 className="font-bold">Javier García</h3>
                <p className="font-bold tracking-wider" style={{ color: "#4a3aff" }}>
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className="text-left tracking-wider">Always looking forward to debugging different files.</p>
            <div className="flex mt-2">
              <a className="m-3 ml-0" href="https://github.com/javimt" target="_blank">
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a className="m-3" href="https://www.linkedin.com/in/javier-garcia-plata-033349246/" target="_blank">
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
          <div className="w-80 shadow-md bg-white p-5 rounded-2xl">
            <div className="flex my-3">
              <div className="rounded-full bg-slate-400" style={{ height: "50px", width: "50px" }}>
                <img src={member} />
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3 className="font-bold">César López</h3>
                <p className="font-bold tracking-wider" style={{ color: "#4a3aff" }}>
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className="text-left tracking-wider">Investigating new ways of developing apps.</p>
            <div className="flex mt-2">
              <a className="m-3 ml-0" href="https://github.com/sibas1" target="_blank">
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a className="m-3" href="https://www.linkedin.com/in/cesar-lopez-a7226625a/" target="_blank">
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
          <div className="w-80 shadow-md bg-white p-5 rounded-2xl">
            <div className="flex my-3">
              <div className="rounded-full bg-slate-400" style={{ height: "50px", width: "50px" }}>
                <img src={member} />
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3 className="font-bold">Daniel Quijada</h3>
                <p className="font-bold tracking-wider" style={{ color: "#4a3aff" }}>
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className="text-left tracking-wider">Making projects to revolutionize the industry.</p>
            <div className="flex mt-2">
              <a className="m-3 ml-0" href="https://github.com/mago0oxx" target="_blank">
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a className="m-3" href="https://www.linkedin.com/in/daniel-augusto-quijada-higgins-92b9a312b/" target="_blank">
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
          <div className="w-80 shadow-md bg-white p-5 rounded-2xl">
            <div className="flex my-3">
              <div className="rounded-full bg-slate-400" style={{ height: "50px", width: "50px" }}>
                <img src={member} />
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3 className="font-bold">Pedro Saravia</h3>
                <p className="font-bold tracking-wider" style={{ color: "#4a3aff" }}>
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className="text-left tracking-wider">Trying to make different kinds of outstanding designs.</p>
            <div className="flex mt-2">
              <a className="m-3 ml-0" href="https://github.com/PedroSaraviaQ" target="_blank">
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a className="m-3" href="https://www.linkedin.com/in/pedrosaravia/" target="_blank">
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
