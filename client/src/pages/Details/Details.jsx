import NavBar from "../../components/NavBar/NavBar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCardsById, clearDetail } from "../../redux/actions/actions";
import { RiGasStationFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Swal from "sweetalert2";
import { useAuth0 } from "@auth0/auth0-react";
import { MPButton } from "../../components/MPButton/MPButton";
import CarsReviews from "../../components/Reviews/CarsReviews";
import { getAllUsers } from "../../redux/actions/actions";

//import { useState } from "react";
import Style from '../../pages/Details/Details.module.css'
function Details() {
  

  const [pay, setPay] = useState(false)
  const { isAuthenticated, user } = useAuth0();
  const { id } = useParams();
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.details);


  useEffect(() => {
    dispatch(getCardsById(id));
    dispatch(getAllUsers())
    return () => dispatch(clearDetail());
  }, [dispatch, id]);

  function handlerPay() {
    setPay(true);
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "You need a login",
      showConfirmButton: true,
      //timer: 3000,
    });
  }

  return (
    <>
      <NavBar />
      <div className="flex mt-[120px]  "></div>
      {allData.length !== 0 ? (
        <div className="mb-[80px]">
          <Link to="/home">
            <button className="ml-12 mb-2">back Home</button>
          </Link>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img
                  alt="image"
                  src={allData.image}
                  className="w-[45em]   rounded-xl"
                />
              </div>

              <div className={Style.infoCar}>

                <div className={Style.title}>
                  <div className="max-w-[35ch] space-y-2">
                    <h1 className="text-xl font-bold sm:text-2xl">
                      {allData.brand}: {allData.model}
                    </h1>

                    <p className="text-sm">
                      {" "}
                      <strong>Category: </strong> {allData.category}
                    </p>

                    {/* <div className="-ml-0.5 flex">
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div> */}
                  </div>
                  <p className={Style.priceCar}>${allData.price}</p>
                </div>
                <div className="mt-4">
                  <div className="prose max-w-none ">
                    <p>
                      {" "}
                      <strong>Year: </strong>
                      {allData.year} <br /> <strong>Description: </strong>{" "}
                      {allData.description}
                    </p>
                  </div>
                  {/* <button class="mt-2 text-sm font-medium underline">Read More</button> */}
                </div>
                <div className="flex flex-row mb-3 mt-6">
                  <p className="flex mb-2 mr-5 text-black">
                    <RiGasStationFill className="text-[#FB8500] text-2xl" />
                    <span className="ml-2 ">{allData.fuelType}</span>
                  </p>
                  <p className="flex mb-2 mr-5 text-black">
                    <ImLocation className="text-[#FB8500] text-2xl" />{" "}
                    <span className="ml-2">{allData.location}</span>
                  </p>
                </div>
                <fieldset>
                  <legend className="mb-3 text-md font-medium">
                    Specifications:
                  </legend>
                  <div className="flex flex-wrap gap-1">
                    <label htmlFor="color_tt">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        className="peer sr-only"
                      />
                      <span className="m-[3px] group inline-block rounded-full border px-3 py-1 text-[15px] font-medium bg-black text-white">
                        Color: {allData.color}
                      </span>
                      <span className="m-[3px] group inline-block rounded-full border px-3 py-1 text-[15px] font-medium bg-black text-white">
                        Doors: {allData.doors}
                      </span>
                      <span className="m-[3px] group inline-block rounded-full border px-3 py-1 text-[15px] font-medium bg-black text-white">
                        Mileage: {allData.mileage} km
                      </span>
                      <span className="m-[3px] group inline-block rounded-full border px-3 py-1 text-[15px] font-medium bg-black text-white">
                        TransissionType: {allData.transissionType}
                      </span>
                      <span className="m-[3px] group inline-block rounded-full border px-3 py-1 text-[15px] font-medium bg-black text-white">
                        Consumptioaan: {allData.fuelConsumption}
                      </span>
                    </label>
                  </div>
                </fieldset>

                <div className={Style.botonCompra}>
                  {isAuthenticated ? <MPButton id={id} /> : <button onClick={handlerPay}>Buy</button> }
                </div> 
                {/*<div className="mt-4">
                  <MPButton id={id}></MPButton>
                </div>  */}
              </div>
            </div>
          </div>
          <CarsReviews id={id} comment={allData.review}/>
        </div>
      ) : (
        <Loading />
      )}
      <Footer />
    </>
  );
}

export default Details;
