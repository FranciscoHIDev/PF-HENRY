import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

<<<<<<< HEAD
import { useDispatch } from "react-redux";
// import { putUser } from "../../../redux/actions/actions";
=======
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../../redux/actions/actions";

export default function MyProfile() {
  const dispatch = useDispatch();
>>>>>>> 563dec7144cbbdf20f5428226c399862d18fd96f

  const { user, isAuthenticated } = useAuth0();

  const [users, setUsers] = useState({});

<<<<<<< HEAD
    const dispatch = useDispatch();
    const { user } = useAuth0();
    const [users, setUsers] = useState({

        name: user.given_name,
        lastname: user.family_name,
        image: "",
        dni: "",
        email: user.email,
        telephone: "",
        location: "",
        roll: "user",
        active: "valid",


    })
=======
  function handleInputChange(e) {
    e.preventDefault();
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(createUser(users));

    alert(
      user.given_name + " " + "tu informacion ha sido Guardada Correctamente"
    );
  }
>>>>>>> 563dec7144cbbdf20f5428226c399862d18fd96f

  console.log(users);

<<<<<<< HEAD
    function handleInputChange(e) {
        e.preventDefault()

        setUsers({
            ...users,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()
        const userInfo = {
            name: users.given_name,
            lastname: users.family_name,
            email: users.email,

            dni: users.dni,
            telephone: users.telephone,

            roll: users.roll,
            active: users.active
        }


        dispatch(putUser(userInfo))

        alert(user.given_name + " " + "tu informacion ha sido Guardada Correctamente")
    }








    return (

        <div className={Style.container}>



            <form onSubmit={handleSubmit} class="mx-auto max-w-lg p-6">


                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="imagen">

                    </label>
                    <div class="relative rounded-full h-32 w-32 flex items-center justify-center bg-gray-200 overflow-hidden">
                        <div class="absolute inset-0 overflow-hidden">
                            <img class="h-full w-full object-cover" src={user.picture} alt="Imagen de perfil" />
                        </div>
                        <div class="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center cursor-pointer hover:bg-opacity-75">
                            <span class="text-white text-3xl font-bold">+</span>
                            <input type="file" class="absolute inset-0 z-50 w-full h-full opacity-0 cursor-pointer" name="image" value={users.image} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>


                <div class="flex  row space-rounded">
                    <div class="mb-4">

                        <label class="block text-gray-700 font-bold mb-2" for="name">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly={true} id="name" type="text" placeholder={user.given_name} name="name" value={users.name} onChange={handleInputChange} />
                    </div>
                    &nbsp;&nbsp;
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="lastname">
                            Lastname
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly={true} id="lastname" type="text" placeholder={user.family_name} name="lastname" value={users.lastname} onChange={handleInputChange} />
                    </div>

                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly={true} id="emailAddress" type="email" placeholder={user.email} name="email" value={users.email} onChange={handleInputChange} />
                </div>



                {/* <div class="flex  row space-rounded">
=======
  return (
    isAuthenticated && (
      <div>
        <form onSubmit={handleSubmit} class="mx-auto max-w-lg p-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              for="imagen"
            ></label>
            <div className="relative rounded-full h-32 w-32 flex items-center justify-center bg-gray-200 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={user.picture}
                  alt="Imagen de perfil"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center cursor-pointer hover:bg-opacity-75">
                <span className="text-white text-3xl font-bold">+</span>
                <input
                  type="file"
                  className="absolute inset-0 z-50 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleInputChange}
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
                readOnly={true}
                id="name"
                type="text"
                placeholder={user.given_name}
                name="name"
                value={users.name}
                onChange={handleInputChange}
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
                id="lastname"
                type="text"
                placeholder={user.family_name}
                name="lastname"
                value={users.lastname}
                onChange={handleInputChange}
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
              id="mail"
              type="email"
              placeholder={user.email}
              name="email"
              value={users.email}
              onChange={handleInputChange}
            />
          </div>

          {/* <div class="flex  row space-rounded">
>>>>>>> 563dec7144cbbdf20f5428226c399862d18fd96f

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

<<<<<<< HEAD
                <div class="flex  row space-rounded">
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="document">
                            D.N.I
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="number" placeholder="DNI" name="dni" value={users.dni} onChange={handleInputChange} />
                    </div>
                    &nbsp;&nbsp;
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="Phone">
                            Phone
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="telephone" type="tel" placeholder="Phone" name="telephone" value={users.telephone} onChange={handleInputChange} />
                    </div>
                </div>

                <div class="flex  row space-rounded">
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="document">
                            Direction
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Direection" name="location" value={users.location} onChange={handleInputChange} />
                    </div>
                </div>




                <div class="flex items-center justify-center">
                    <input class="bg-blue-500 hover:bg-blue value=" type="submit" value="Send" />
                </div>



            </form>


        </div>





    );
=======
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
                id="document"
                type="text"
                placeholder="DNI"
                name="dni"
                value={users.dni}
                onChange={handleInputChange}
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
                placeholder="Phone"
                name="telephone"
                value={users.telephone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <input
              className="bg-blue-500 hover:bg-blue value="
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    )
  );
>>>>>>> 563dec7144cbbdf20f5428226c399862d18fd96f
}
