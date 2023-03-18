import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { putUser } from "../../../redux/actions/actions";


export default function MyProfile() {

  const dispatch = useDispatch();

  const { user, isAuthenticated } = useAuth0();

  const [users, setUsers] = useState({});



  if (isAuthenticated && user) {
    axios.get("/users")
      .then((e) => {
        const userDB = e.data.find((e) => e.email === user.email);
  console.log(userDB)
      

    

  })

}



// function handleInputChange(e) {
//   e.preventDefault();
//   setUsers({
//     ...users,

//     [e.target.name]: e.target.value,
//   });
// }


// function handleSubmit(e) {
//   e.preventDefault();
//   // const infoUsertopost = {

//   //   name: user.given_name,
//   //   email: users.email,
//   //   image: users.picture,
//   //   dni: users.dni,
//   //   lastname: user.family_name,
//   //   telephone: users.telephone,
//   //   location: users.location,
//   //   kindOfPerson: users.kindOfPerson,

//   // }
//   // console.log(infoUsertopost)
//   dispatch(putUser());

//   alert(
//     user.given_name + " " + "tu informacion ha sido Guardada Correctamente"
//   );
// }




return (
  isAuthenticated && (
    <div>
      <form className="mx-auto max-w-lg p-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            for="imagen"
          ></label>
          <div className="relative rounded-full h-32 w-32 flex items-center justify-center bg-gray-200 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <img
                key="image"
                className="h-full w-full object-cover"
                src={users.picture}
                alt="Imagen de perfil"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center cursor-pointer hover:bg-opacity-75">
              <span className="text-white text-3xl font-bold">+</span>
              <input
                type="file"
                className="absolute inset-0 z-50 w-full h-full opacity-0 cursor-pointer"

              />
            </div>
          </div>
        </div>

        <div className="flex  row space-rounded">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              // onChange={handleInputChange}
              readOnly={true}
              key="name"
              type="text"
              placeholder={users.name}
              name="name"


            />
          </div>
          &nbsp;&nbsp;
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              for="lastname"
            >
              Lastname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              readOnly={true}
              key="lastname"
              id="lastname"
              type="text"
              placeholder={users.lastname}
              name="lastname"
            // value={users.lastname}
            // onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" for="mail">
            Mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            readOnly={true}
            key="email"

            type="email"
            placeholder={users.email}
            name="email"
            value={users.email}
          // onChange={handleInputChange}
          />
        </div>
        <div className="flex  row space-rounded">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="Kingofperson">
              Type of person
            </label>
            <select name="kindOfPerson" >
              <option value="natural">natural</option>
              <option value="business">business</option>
            </select>
            &nbsp;&nbsp;
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
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
              // onChange={handleInputChange}
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
              className="block text-gray-700 font-bold mb-2"
              for="document"
            >
              Document
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              key="dni"

              type="number"
              placeholder={users.dni}
              name="dni"
            // value={users.dni}
            // onChange={handleInputChange}
            />
          </div>
          &nbsp;&nbsp;
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="Phone">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="telephone"
              type="tel"
              placeholder={users.telephone}
              name="telephone"
            // value={users.telephone}
            // onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button type="submit"  >Send</button>

          {/* onClick={handleSubmit} */}


        </div>
      </form>
    </div>
  )
);
}
