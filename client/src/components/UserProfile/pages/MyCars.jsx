import React, { useState } from "react";
import Style from '../pages/MyCars.module.css'
// import HeaderUser from "../HeaderUser";
// import SideBarUser from "../SideBarUser";
import { useAuth0 } from '@auth0/auth0-react'

import { useDispatch, useSelector } from "react-redux";
// import { putUser } from "../../../redux/actions/actions";
import foto from '../../../assets/about-images/what-we-offer.jpg';

export default function MyCars() {
    // const dispatch= useDispatch()
    // const state = useSelector(state => state)
    // const [compra , setCompra] = useState({})







    return (

        <div className={Style.container}>
<div className={Style.title}>
    <h1> My Cars </h1>
</div>


<div className={Style.panel}>



<div class="max-w-sm mr-1 rounded overflow-hidden shadow-lg">
  <img class="w-full" src={foto} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">!Que miras, BoBO! anda pa asha!</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>


<div className={Style.panelInfo} >
<div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
  <p>Something happened that you should know about.</p>
</div>
<div className={Style.datos}>
    <h2>Toyota, corrolla</h2>
</div>


</div>


    
</div>


        </div>




    );
}


