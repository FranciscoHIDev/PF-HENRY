import React, { useState } from "react";
import Style from '../pages/Myprofile.module.css'
// import HeaderUser from "../HeaderUser";
// import SideBarUser from "../SideBarUser";
import { useAuth0 } from '@auth0/auth0-react'

import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../../../redux/actions/actions";



export default function Myprofile() {


    const dispatch = useDispatch();


    const { user } = useAuth0();
   
    const [users, setUsers] = useState({
         
    })


    function handleInputChange(e) {
        e.preventDefault()
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()

        dispatch(createUser(users))

        alert(user.given_name + " " + "tu informacion ha sido Guardada Correctamente")
    }
console.log(users)

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
                            <input type="file" class="absolute inset-0 z-50 w-full h-full opacity-0 cursor-pointer" onChange={handleInputChange} />
                        </div>
                    </div>
                </div>


                <div class="flex  row space-rounded">
                    <div class="mb-4">

                        <label class="block text-gray-700 font-bold mb-2" for="name">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly={true} id="name" type="text" placeholder={user.given_name} name="name" value={users.name}  onChange={handleInputChange}/>
                    </div>
                    &nbsp;&nbsp;
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="lastname">
                            Lastname
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly={true} id="lastname" type="text" placeholder={user.family_name} name="lastname" value={users.lastname} onChange={handleInputChange}/>
                    </div>

                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="mail">
                        Mail
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly={true} id="mail" type="email" placeholder={user.email} name="email" value={users.email}onChange={handleInputChange} />
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

                <div class="flex  row space-rounded">
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="document">
                            Document
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="document" type="text" placeholder="DNI" name="dni" value={users.dni}  onChange={handleInputChange}/>
                    </div>
                    &nbsp;&nbsp;
                    <div class="mb-4">
                        <label class="block text-gray-700 font-bold mb-2" for="Phone">
                            Phone
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="telephone" type="tel" placeholder="Phone" name="telephone" value={users.telephone} onChange={handleInputChange}/>
                    </div>
                </div>





                <div class="flex items-center justify-center">
                    <input class="bg-blue-500 hover:bg-blue value=" type="submit" value="Send" />
                </div>



            </form>


        </div>





    );
}


