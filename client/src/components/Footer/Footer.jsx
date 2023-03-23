import React from "react";
import stl from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsMailbox } from "react-icons/bs";
import { Link } from "react-router-dom";

import logo from "../../assets/logo-w.png";
function Footer() {
  return (
    <div className={stl.footer}>
      <div className={stl.footer_contenedor}>
        <div className={stl.item + " " + stl.i2}>
          <div className={stl.logo}>
            <img src={logo}></img>
          </div>
          <div className={stl.descrip}>
            <p>Copyright © 2023 CarMania. All rights reserved.</p>
          </div>
        </div>
        <div className={stl.links + " " + stl.i1}>
          <div className={stl.item + ""}>
            <Link to="/about">
              <a>About</a>
            </Link>
            <Link to="/contact">
              <a>Contact</a>
            </Link>
          </div>
          <div className={stl.item}>
            <h3>Social networks</h3>
            <div className="flex">
              <a href="https://web.facebook.com/profile.php?id=100090972464782&_rdc=1&_rdr" target="_blank">
                <div className={stl.i}>
                  <BsFacebook></BsFacebook>
                </div>
              </a>
              <a href="https://www.instagram.com/carmania_2023/" target="_blank">
                <div className={stl.i}>
                  <BsInstagram></BsInstagram>
                </div>
              </a>
              <a href="mailto:info.carmania2023@gmail.com" target="_blank">
                <div className={stl.i}>
                  <BsMailbox></BsMailbox>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
