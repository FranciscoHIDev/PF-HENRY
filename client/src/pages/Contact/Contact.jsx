import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Style from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postContact } from "../../redux/actions/actions";
import Swal from "sweetalert2";

export default function Contact() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    lastname: "",
    emailAddress: "",
    message: "",
  });
  const [errores, setErrores] = useState({});

  function validate(valor) {
    let errores = {};
    if (!valor.name) errores.name = "this field is required";
    if (!valor.lastname) errores.lastname = "this field is required";
    if (!valor.emailAddress) errores.emailAddress = "This field is empty";

    // if (!valor.message) errores.message = "este campo esta vacio";
    if (valor.message.length < 15)
      errores.message = "it most have at least 15 characters";
    else if (
      !/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/.test(
        valor.emailAddress
      )
    ) {
      errores.emailAddress = "this it´s not an valid email";
    }
    return errores;
  }

  function handleInputChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setErrores(
      validate({
        ...state,
        [e.target.name]: e.target.value,
      })
    );
    console.log(errores);
  }

  function handleSubmit(e) {
    const newmensaje = {
      name: state.name,
      lastname: state.lastname,
      emailAddress: state.emailAddress,
      message: state.message,
    };
    e.preventDefault();
    dispatch(postContact(newmensaje));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your message has been sent successfully",
      showConfirmButton: false,
      timer: 3000,
    });
    navigate("/home");
  }

  return (
    <>
      <NavBar />

      <div className={Style.container}>
        <form onSubmit={handleSubmit} className={Style.formulario}>
          <div className={Style.info}>
            <label
              className={Style.label}
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Name{" "}
            </label>
            <input
              className={Style.input}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handleInputChange(e)}
              type="text"
              placeholder="type your name"
              name="name"
              value={state.name}
              required
            />
            {errores && errores.name ? (
              <spam style={{ color: "red" }}> {errores.name} </spam>
            ) : null}
          </div>

          <div className={Style.info}>
            {" "}
            <br />
            <label
              className={Style.label}
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Lastname{" "}
            </label>
            <input
              className={Style.input}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handleInputChange(e)}
              key="lastname"
              type="text"
              placeholder="type your lastname"
              name="lastname"
              value={state.lastname}
              required
            />
            {errores && errores.lastname ? (
              <spam style={{ color: "red" }}>{errores.lastname} </spam>
            ) : null}
          </div>

          <div className={Style.info}>
            {" "}
            <br />
            <label
              className={Style.label}
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Email{" "}
            </label>
            <input
              className={Style.input}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handleInputChange(e)}
              key="emailAddress"
              type="text"
              placeholder="type your email adress"
              name="emailAddress"
              value={state.emailAddress}
              required
            />
            {errores && errores.emailAddress ? (
              <spam style={{ color: "red" }}> * {errores.emailAddress} </spam>
            ) : null}
          </div>

          <div className={Style.info}>
            {" "}
            <br />
            <label
              className={Style.label}
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              name="message"
            >
              Message
            </label>
            <textarea
              className={Style.input}
              onChange={(e) => handleInputChange(e)}
              key="message"
              placeholder=""
              name="message"
              value={state.message}
            />
            {errores && errores.message ? (
              <spam style={{ color: "red" }}>* {errores.message}</spam>
            ) : null}
          </div>
          <br />
          <button
            type="submit"
            onClick={handleSubmit}
            class="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
