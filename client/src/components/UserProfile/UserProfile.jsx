import React, { useEffect, useState } from "react";
import Style from "../UserProfile/UserProfile.module.css";
import { Link } from "react-router-dom";
import { BsFillPersonLinesFill, BsCalendar3, BsFillBagCheckFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { renderInfoUsers } from "../../redux/actions/actions";
import UserInfo from "../UserInfo/UserInfo";
import UserMyShopping from "../UserMyShopping/UserMyShopping";

export default function UserProfile() {
  const infoUsers = useSelector((state) => state.infoUsers);
  const dispatch = useDispatch();
  const [users, setUsers] = useState(<UserInfo/>)

   /* useEffect(() => {
    <UserMyShopping />
  }) */

  function handlerInfoUsers(e) {
    if(infoUsers === "myInfo") dispatch(renderInfoUsers(e.target.value));

  }
 
  return (
      <div className={Style.container}>
        <div className={Style.panel}>

          <div className={Style.data}>
            <div className={Style.Icon}>
              {" "}
              <BsFillPersonLinesFill />
            </div>
            <button value="myInfo" onClick={handlerInfoUsers}>My Info</button>
          </div>
          <div className={Style.data}>
            <div className={Style.Icon}>
              <BsFillBagCheckFill />
            </div>
            <button onClick={handlerInfoUsers} value="myShopping">My shopping</button>
          </div>
          <div className={Style.data}>
            <div className={Style.Icon}>
              <AiFillStar />
            </div>
            <button> Favorites! </button>
          </div>
        </div>

        <div className={Style.contain}>
          <div className={Style.barraBtns}>
            <Link to="/home">
              <button className="mr-2">GO Home! </button>
            </Link>

            <button className=" flex justify-center mr-2">
              {" "}
              <BsCalendar3 />{" "}
            </button>
            <button className="mr-2">User.Name</button>
          </div>
          <div className={Style.info}>
            <div className={Style.tp1}>
              <div className={Style.tp2}>
                <label htmlFor="Countrie">Select your country</label>
                <select name="pais">
                  <option value="">Seleccione un país</option>
                  <option value="AF">Afganistán</option>
                  <option value="AL">Albania</option>
                  <option value="DE">Alemania</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguila</option>
                  <option value="AQ">Antártida</option>
                  <option value="AG">Antigua y Barbuda</option>
                  <option value="SA">Arabia Saudita</option>
                  <option value="DZ">Argelia</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaiyán</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahréin</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BE">Bélgica</option>
                  <option value="BZ">Belice</option>
                  <option value="BJ">Benín</option>
                  <option value="BM">Bermudas</option>
                  <option value="BY">Bielorrusia</option>
                  <option value="MM">Birmania</option>
                  <option value="BO">Bolivia</option>
                  <option value="BA">Bosnia y Herzegovina</option>
                  <option value="BW">Botsuana</option>
                  <option value="BR">Brasil</option>
                  <option value="BN">Brunéi</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="BT">Bután</option>
                  <option value="CV">Cabo Verde</option>
                  <option value="KH">Camboya</option>
                  <option value="CM">Camerún</option>
                  <option value="CA">Canadá</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CY">Chipre</option>
                  <option value="VA">Ciudad del Vaticano</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comores</option>
                  <option value="CG">Congo</option>
                  <option value="KP">Corea del Norte</option>
                  <option value="KR">Corea del Sur</option>
                  <option value="CI">Costa de Marfil</option>
                  <option value="CR">Costa Rica</option>
                  <option value="HR">Croacia</option>
                  <option value="CU">Cuba</option>
                  <option value="DK">Dinamarca</option>
                  <option value="DM">Dominica</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
  ); 
  
}
