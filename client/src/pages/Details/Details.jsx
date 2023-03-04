import NavBar from "../../components/NavBar/NavBar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCardsById, clearDetail } from "../../redux/actions/actions";
import { RiGasStationFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import Footer from "../../components/Footer/Footer.jsx"

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.details);

   useEffect(() => {
    dispatch(getCardsById(id));
    return () => dispatch(clearDetail());
  }, [dispatch, id]);

  return (
    <>
      <NavBar />
      <div className="flex mb-[200px]">
      </div>
      {allData.length !== 0 ? (
        <div>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                <img
                  alt="Les Paul"
                  src={allData.image}
                  className="w-[45em] h-[34em] aspect-square w-full rounded-xl"
                />
              </div>

              <div className="shadow-sm bg-slate-200 p-[20px] rounded-lg sticky top-0">
                <div className="mt-8 flex justify-between">
                  <div className="max-w-[35ch] space-y-2">
                    <h1 className="text-xl font-bold sm:text-2xl">
                      {allData.brand}: {allData.model}
                    </h1>

                    <p className="text-sm">
                      {" "}
                      <strong>Category: </strong> {allData.category}
                    </p>

                    <div className="-ml-0.5 flex">
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
                    </div>
                  </div>
                  <p className="text-lg font-bold">${allData.price}</p>
                </div>
                <div className="mt-4">
                  <div className="prose max-w-none">
                    <p>
                      {" "}
                      <strong>Year: </strong>
                      {allData.year} <br /> <strong>Description: </strong>{" "}
                      {allData.description}
                    </p>
                  </div>
                  {/* <button class="mt-2 text-sm font-medium underline">Read More</button> */}
                </div>
                <div className="mt-4">
                  <div className="prose max-w-none">
                    <RiGasStationFill />
                    <p>{allData.fuelType}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-[7px] prose max-w-none">
                    <ImLocation />
                    <p>{allData.location}</p>
                  </div>
                </div>
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">
                    Specifications
                  </legend>
                  <div className="flex flex-wrap gap-1">
                    <label htmlFor="color_tt" className="cursor-pointer">
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
                        Mileage: {allData.mileage}
                      </span>
                      <span className="m-[3px] group inline-block rounded-full border px-3 py-1 text-[15px] font-medium bg-black text-white">
                        TransissionType: {allData.transissionType}
                      </span>
                      <span className="m-[3px] group inline-block rounded-full border px-3 py-1 text-[15px] font-medium bg-black text-white">
                        Consumption: {allData.fuelConsumption}
                      </span>
                      <span className="m-[3px] group inline-block rounded-full border px-3 py-1 text-[15px] font-medium bg-black text-white">
                        Status: {allData.status}
                      </span>
                    </label>
                  </div>
                </fieldset>
                <div className="mt-8 flex gap-4">
                  <button
                    onClick={null}
                    type="submit"
                    className="block rounded bg-[rgb(251,133,0)] px-5 py-3 text-xs font-medium text-white hover:bg-[rgb(220,143,0)]"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>loading...</h2>
      ) 
      }
      <Footer/>
    </>
  );
}

export default Details;
