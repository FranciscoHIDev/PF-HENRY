import React from "react";
import stl from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin  } from "react-icons/bs";
import {RiInstagramFill} from 'react-icons/ri'
import { Link } from "react-router-dom";

import logo from "../../assets/logo-w.png";
function Footer() {
  return (
    <div className={stl.footer}>
      <div className={stl.footer_contenedor}>
        <div className={stl.item}>
          <div className={stl.logo}>
            <img src={logo}></img>
          </div>
          <div className={stl.descrip}>
            <p>
            Copyright © 2023 CarMania. All rights reserved.
            </p>
          </div>
        </div>
        <div className={stl.item}>
          <Link to= "/about"><a><h3>About</h3>
          <p>"En 1990, un joven apasionado por los autos llamado Tomás decidió crear su propia empresa de venta de autos. Con tan solo 21 años, Tomás sabía que tenía mucho que aprender, pero estaba decidido a hacer de su sueño una realidad. Comenzó su negocio en un pequeño garaje en las afueras de la ciudad, donde arreglaba y vendía autos usados.</p></a></Link>
        </div>
       
        <div className={stl.item}>
          <h3>Social networks</h3>
         <a href="https://www.facebook.com/profile.php?id=100090972464782"><div className={stl.i}>
            <BsFacebook className="w-8"> </BsFacebook>CarMania
          </div></a> 
          {/* <a><div className={stl.i}>
            <BsGithub></BsGithub>
          </div></a>
          <a><div className={stl.i}>
            <BsLinkedin></BsLinkedin>
          </div></a> */}
          <a href="https://www.instagram.com/carmania_2023/"> 
          <div className={stl.i}>
            <RiInstagramFill className="w-8"> </RiInstagramFill> <br /> <h2>CarMania</h2>
          </div></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

