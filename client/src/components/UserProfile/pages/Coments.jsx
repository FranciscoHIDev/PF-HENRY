import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { getAllUsers } from "../../../redux/actions/actions";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Style from './coments.module.css'
import { Link } from "react-router-dom";
export default function Coments() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllUsers())
  }, []);




  const { user, isAuthenticated } = useAuth0();


  const userDB = useSelector(state => state.allUsers)

  if (isAuthenticated && (userDB.length > 0)) {
    const aux = userDB.find((e) => e.email === user.email)
    var userid = aux.review
    console.log(userid)
  }

  // "bg-white text-primary p-2 rounded-t-md border-b-2 border-gray-400"

  return (

    <div className={Style.container}>
      {userid?.map((e, index) => {
        return (
          <div className={Style.comentario} key={index}>
            <div className={Style.title}>
              <h2 className="flex-initial w-64 text-primary font-bold text-lg">Coment</h2>
            </div>

            <div className={Style.msg}>
              <p className="text-black bg-white" >"{e.comment}"</p>
              <br />
              <br />
              <div>
                <p>Status : {e.status}</p>
                <div>
                  <Link to={"/detail/" + e.idCar} >
                    <p>Go to Publication</p>
                  </Link>
                </div>
              </div>


            </div>
          </div>
        )
      })}

    </div>








  )
}





