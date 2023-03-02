import React from 'react';
import stl from './Footer.module.css';
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import logo from '../../assets/logo.png';


function Footer() {
    return (
        <div className={stl.footer}>
            <div className={stl.footer_contenedor}>
                <div className={stl.item} >
                    <div className={stl.logo}>
                    <img src={logo} ></img>
                    </div>
                    <div className={stl.descrip}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nostrum,
                            perferendis ad modi corrupti nesciunt qui ullam eos corporis odit minus magni
                            a fugiat delectus accusamus ex, nulla aliquid quia?</p>
                    </div>
                </div>
                <div className={stl.item}>
                    <h3>item 1</h3>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                </div>
                <div className={stl.item} >
                    <h3>item 3</h3>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                    <a >subitem</a>
                </div>
                <div className={stl.item}>
                    <h3>item 4</h3>
                    <div className={stl.i}><BsFacebook></BsFacebook></div>
                    <div className={stl.i}><BsGithub></BsGithub></div>
                    <div className={stl.i}><BsLinkedin></BsLinkedin></div>
                    
                </div>
            </div></div>

    )
}

export default Footer


