import React ,{useState} from "react";
import Style from "../UserProfile/UserProfile.module.css";
import { Link } from "react-router-dom";
import { BsFillPersonLinesFill, BsCalendar3, BsFillBagCheckFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export default function UserProfile() {

const [user , setUser] = useState ({})

function handleInputChange (e){
  setUser({
    ...user,
    [e.target.name] : e.target.value,
  }
      
  )
}
function handleSubmit() {
  return alert(user);
}
console.log(user.name)



  return (
    <div className={Style.container}>
      <div className={Style.panel}>
        <h1> My Profile </h1>

        <div className={Style.data}>
          <div className={Style.Icon}>
            {" "}
            <BsFillPersonLinesFill />
          </div>
          <h2>My Info</h2>
        </div>
        <div className={Style.data}>
          <div className={Style.Icon}>
            <BsFillBagCheckFill />
          </div>
          <h2>Mis compras</h2>
        </div>
        <div className={Style.data}>
          <div className={Style.Icon}>
            <AiFillStar />
          </div>

          <h2> Favorites! </h2>
        </div>
      </div>

      <div className={Style.contain}>
        <div className={Style.barraBtns}>
          <Link to="/home">
            <button class="mr-2">GO Home! </button>
          </Link>

          <button class=" flex justify-center mr-2">
            {" "}
            <BsCalendar3 />{" "}
          </button>
          <button class="mr-2">USer.Name</button>
        </div>

        <form onSubmit={handleSubmit} className={Style.info}>
          <div>
            <h3>Personal information</h3>
          </div>
          <div>
            <label for="imagen">Selecciona una imagen:</label>
            <input type="file" id="imagen" name="imagen"/>
          </div>
          <div className={Style.tp1}>
            <div className={Style.tp2}>
              <label className={Style.labels}>Name</label>
              <input  onCahnge={(e)=>handleInputChange(e)} type="text" name="name"/>
            </div>
            <div className={Style.tp2}>
              <label className={Style.labels}>Lastname</label>
              <input type="text" />
            </div>
          </div>
          <div className={Style.tp1}>
            <div className={Style.tp2}>
              <label className={Style.labels}>Email Adress</label>
              <input type="text" />
            </div>
            <div className={Style.tp2}>
              <label className={Style.labels}>Document</label>
              <input type="text" />
            </div>
          </div>
          <div className={Style.tp1}>
            <div className={Style.tp2}>
              <label htmlFor="Countrie">Select your countrie</label>

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

          <div>
            <input type="submit" value="enviar"/>
          </div>
        </form>
      </div>
    </div>
  );
}
