import React, { useEffect } from 'react'
import { useState } from 'react';
import { getAllUsers } from '../../../redux/actions/actions';
import {useSelector, useDispatch} from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";

function MyCars() {
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(getAllUsers())
    },[])
    const { user, isAuthenticated } = useAuth0();
    const usersDB = useSelector(state => state.allUsers)
    
    if(isAuthenticated && (usersDB.length!==0)){
      const aux = usersDB.find((e)=> e.email===user.email)
      var facturas = aux.pagoFactura
    }
   
   // e[0].items[0].picture_url
  return  facturas? (
    <div>
      {facturas.map((e)=>(<div className='my-5' >
        <div className='bg-white text-primary p-2 rounded-t-md border-b-2 border-gray-400'>{e[0].date_approved}</div>

        <div className='flex bg-white p-5 rounded-b-md' >
        <div className="flex-initial w-64 " >
        <img
        className="rounded-t-lg h-[100px] w-[180px] "
        src={e[0].items[0].picture_url}
        />
        </div >
        <div className= 'flex-initial w-64 text-primary font-bold text-lg'>
      <p className='text-gray-400' >Price : <span className='text-black'>{ e[0].items[0].unit_price}</span> </p> 
      <p className='text-gray-400'>Name : <span className='text-black'>{ e[0].items[0].description }   {e[0].items[0].title}</span></p> 
      <p className='text-gray-400'>Status Buyding: <span className='text-black'>{ e[0].status}</span></p>
      <p className='text-gray-400'>Status Delivered : <span className='text-black'>{ e[0].statusCar}</span></p>
            </div>
        </div>
     </div>))}
      
    </div> 
  ):(<h1> you don't have purchases yet </h1>)
}

export default MyCars