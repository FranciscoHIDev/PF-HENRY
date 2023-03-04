import NavBar from "../../components/NavBar/NavBar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCardsById } from "../../redux/actions/actions";
import style from "./Details.module.css";
import { RiGasStationFill } from "react-icons/ri";
import { ImLocation } from "react-icons/im";

function Details() {
  const dispatch = useDispatch()
  const allData = useSelector((state) => state.details);
  const { id } = useParams();
console.log(allData);

useEffect(() => {
  dispatch(getCardsById(id));
},[dispatch])

  return allData.hasOwnProperty("model") ? (
    <div>
      <div className="flex mb-[200px]">
        <NavBar/>
      </div>
    <section>
      <div class="relative mx-auto max-w-screen-xl px-4 py-8">
        <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="Les Paul"
              src={allData.image}
              class="w-[45em] h-[34em] aspect-square w-full rounded-xl"
            />
          </div>

          <div class="shadow-sm bg-slate-900 p-[20px] rounded-lg sticky top-0">
            <div class="mt-8 flex justify-between">
              <div class="max-w-[35ch] space-y-2">
                <h1 class="text-xl font-bold sm:text-2xl">
                  {allData.brand}: {allData.model}
                </h1>

                <p class="text-sm"> <strong>Category: </strong> {allData.category}</p>

                <div class="-ml-0.5 flex">
                  <svg
                    class="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    class="h-5 w-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <p class="text-lg font-bold">${allData.price}</p>
            </div>
            <div class="mt-4">
              <div class="prose max-w-none">
                <p> <strong>Año: </strong>{allData.year} <br /> <strong>Descripcion: </strong> {allData.description}</p>
              </div>
              {/* <button class="mt-2 text-sm font-medium underline">Read More</button> */}
            </div>
            <div class="mt-4">
              <div class="prose max-w-none">
                <RiGasStationFill/>
                <p>{allData.fuelType}</p>
              </div>
            </div>
            <div class="mt-4">
              <div class="mb-[7px] prose max-w-none">
                <ImLocation/>
                <p>{allData.location}</p>
              </div>
            </div>
              <fieldset>
                <legend class="mb-1 text-sm font-medium">Especificaciones</legend>
                <div class="flex flex-wrap gap-1">
                  <label for="color_tt" class="cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      id="color_tt"
                      class="peer sr-only"
                    />
                  <span class="m-[3px] group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                    Color: {allData.color}
                  </span>
                  <span class="m-[3px] group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                    Doors: {allData.doors}
                  </span>
                  <span class="m-[3px] group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                    Mileage: {allData.mileage}
                  </span>
                  <span class="m-[3px] group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                    TransissionType: {allData.transissionType}
                  </span>
                  <span class="m-[3px] group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                    Consumption: {allData.fuelConsumption}
                  </span>
                  <span class="m-[3px] group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                    Status: {allData.status}
                  </span>
                </label>
                </div>
              </fieldset>
              <div class="mt-8 flex gap-4">
                <button
                  onClick={null}
                  type="submit"
                  class="block rounded bg-[rgb(251,133,0)] px-5 py-3 text-xs font-medium text-white hover:bg-[rgb(220,143,0)]"
                >
                  Add to Cart
                </button>
              </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  ) : (
    <h2>loading...</h2>
  );
}

export default Details;

