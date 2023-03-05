import React from "react";
import stl from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
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
          <Link to= "/about"><a><h3>About</h3></a></Link>
        </div>
        <div className={stl.item}>
          <h3>item 4</h3>
         <a><div className={stl.i}>
            <BsFacebook></BsFacebook>
          </div></a> 
          <a><div className={stl.i}>
            <BsGithub></BsGithub>
          </div></a>
          <a><div className={stl.i}>
            <BsLinkedin></BsLinkedin>
          </div></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

