import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";
import logo2 from '../../assets/logo2.png'
function NavBar(props) {

  const [lenguaje, setLenguje] = React.useState({
    titulo: "EL sitio donde compras y Vendes",
    boton: "Entrar!",
  });

  // function onButtonClick(e) {

  //   e.target.value === "EN" ?
  //     setLenguje({
  //       titulo: "The site You can buy an sell",
  //       boton: "GO!"
  //     }) : setLenguje({
  //       titulo: "EL sitio donde compras y Vendes",
  //       boton: "Entrar!"
  //     })


  //   e.target.value === "EN"
  //     ? setLenguje({
  //         titulo: "The site You can buy an sell",
  //         boton: "GO!",
  //       })
  //     : setLenguje({
  //         titulo: "EL sitio donde compras y Vendes",
  //         boton: "Entrar!",
  //       });

  // }
  return (
    <React.Fragment>
      <div className=" flex bg-white w-full fixed p-4">    
      <div className=" flex al-center bg-white w-full fixed p-4 mr-0">
        <div className="container mx-auto ">
          <div className="flex justify-around text-[20px] text-black">
            <Link className="" to="/Home">
              {/* <img src={logo2} width="150px" height="50px"  alt="" /> */}              
            </Link>
            <Link to="/home">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <div className="flex">
              <Link to="/cart">
                <HiOutlineShoppingBag className="text-3xl mr-4" />
              </Link>
              <Link to="cart">
                <MdFavoriteBorder className="text-3xl" />
              </Link>
            </div>
            <button>Login</button> 
            <div>
                <button  className=" mr-2" onClick={props.onButtonClick} value="EN">
          EN
        </button>
        <button className=" mr-2" onClick={props.onButtonClick} value="ES">
          ES
        </button>
            </div>
          
          </div>
         
        </div> 
        <Outlet />
      </div>
      <Outlet />
    </React.Fragment>   
      );
}

export default NavBar;
