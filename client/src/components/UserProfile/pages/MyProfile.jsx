import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers,  putUser, userRender, } from "../../../redux/actions/actions";
import { FiEdit } from "react-icons/fi";
import Style from "./MyProfile.module.css";
import Dropzone from "react-dropzone";

export default function MyProfile() {
  const dispatch = useDispatch();
  const userDB = useSelector((state) => state.allUsers);
  const userIdRender = useSelector(state => state.userRender);
  const { user, isAuthenticated } = useAuth0();
  const [selectedFile, setSelectedFile] = useState(null);
  const [render, setRender] = useState([])

  useEffect(() => {
    if(isAuthenticated && (userDB.length > 0)) {
      dispatch(userRender(user.email));
    }
  },[!userIdRender.length]);

  const userId = userIdRender._id;

  if (isAuthenticated && userDB.length > 0) {
    var aux = userDB.find((e) => e.email === user.email);
    console.log(aux);
    var userid = aux._id;
    var userName = aux.name;
    var userLastname = aux.lastname;
    var userLocation = aux.location;
    var userDni = aux.dni;
    var userKingofperson = aux.kindOfPerson;
    var userTelephone = aux.telephone;
    var userImage = aux.image;
  }

  const [users, setUsers] = useState({
    image: "" || userImage,
    name: "" || userName,
    lastname: "" || userLastname,
    kindOfPerson: "natural" || userKingofperson,
    email: user.email,
    location: "" || userLocation,
    dni: "" || userDni,
    telephone: "" || userTelephone,
    active: "",
    rol: "",
  });

  function handleOnClick(e) {
    e.preventDefault;
    setUsers({
      [e.target.name]: e.target.value,
    });
  }

  function handleFileSelect(files) {
    setSelectedFile(files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes enviar el archivo a tu servidor utilizando fetch, axios, etc.
  }

  function handleInputChange(e) {
    e.preventDefault();
    setUsers({
      ...users,

      [e.target.name]: e.target.value,
    });
  }

  function onbottonClick(e) {
    e.preventDefault();
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    setUsers({
      name: users.name,
      email: users.email,
      image: selectedFile,
      dni: users.dni,
      lastname: users.lastname,
      telephone: users.telephone,
      location: users.location,
      kindOfPerson: users.kindOfPerson,
      active: "valid",
      roll: "user",
    });
    // const infoUsertopost = {

    // }
    // console.log(infoUsertopost)
    console.log(users);
    dispatch(putUser(userid, users));

    alert(
      user.given_name + " " + "tu informacion ha sido Guardada Correctamente"
    );
  }

  return (
    
    <div>
      {isAuthenticated ? (
        <div>
          <form
            className="mx-auto max-w-lg p-6 text-white"
            onSubmit={handleSubmit}
          >
            <div className={Style.imagen}>
              <img
                src={users.image}
                width="100px"
                height="100px"
                alt="img not fuound"
              />
              <input
                onChange={handleInputChange}
                type="file"
                id={users.image}
                name={users.image}
              />
            </div>
            <div className="flex  row space-rounded">
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                  key="name"
                  type="text"
                  placeholder={users.name}
                  name="name"
                  value={users.name}
                />
              </div>
              &nbsp;&nbsp;
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  htmlFor="lastname"
                >
                  Lastname
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  key="lastname"
                  id="lastname"
                  type="text"
                  placeholder="put your lastname"
                  name="lastname"
                  value={users.lastname}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-white-700 font-bold mb-2" for="mail">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly={true}
                key="email"
                type="email"
                placeholder={user.email}
                name="email"
                value={users.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex  row space-rounded">
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  for="Kingofperson"
                >
                  Type of person
                </label>
                <select
                  name="kindOfPerson"
                  className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                >
                  <option value="natural">natural</option>
                  <option value="business">business</option>
                </select>
                &nbsp;&nbsp;
                <div className="mb-4">
                  <label
                    className="block text-white-700 font-bold mb-2"
                    for="location"
                  >
                    Location
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    key="location"
                    id="location"
                    type="text"
                    placeholder={users.location}
                    name="location"
                    value={users.location}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              readOnly={true}
              id="mail"
              type=""
              placeholder={user.email}
              name="email"
              value={users.kindOfPerson}
              onChange={handleInputChange}
            /> */}
            </div>

            {/* <div class="flex  row space-rounded">

                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="Countrie">
                            Countrie
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="countrie" type="text" placeholder="Countrie" name="countrie" value={users.countrie}  onChange={(e)=>handleInputChange(e)} />
                    </div>
                    &nbsp;&nbsp;

                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="direction">
                            Direction
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="direction" type="text" placeholder="Direction" onChange={(e)=>handleInputChange(e)}/>
                    </div>
                </div> */}

            <div className="flex  row space-rounded">
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  for="document"
                >
                  D.N.I
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  key="dni"
                  type="number"
                  placeholder={users.dni}
                  name="dni"
                  value={users.dni}
                  onChange={handleInputChange}
                />
              </div>
              &nbsp;&nbsp;
              <div className="mb-4">
                <label
                  className="block text-white-700 font-bold mb-2"
                  for="Phone"
                >
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="telephone"
                  type="tel"
                  placeholder={users.telephone}
                  name="telephone"
                  value={users.telephone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button type="submit">Send</button>

              {/* onClick={handleSubmit} */}
            </div>
          </form>
        </div>
      ) : (
        <p> there is not information to show</p>
      )}
    </div>
  );
}
