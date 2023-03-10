import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Style from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { PostContact } from "../../redux/actions/actions";


function Contact() {
 
  const dispatch = useDispatch()
  
  const [state, setState] = useState({
    name: "",
    lastname: "",
    email: "",
    comentario : "",
  });
  const [errores, setErrores] = useState({});

  function validate(valor) {
    let errores = {};
    if (!valor.name) errores.name = "El campo nombre esta vacio";
    if (!valor.lastname) errores.lastname = "Este campo es requerido!";
    if (!valor.mail) errores.mail = "This fiel is empty";
    if (!valor.comentario) errores.comentario = "este campo esta vacio";
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/.test(valor.mail)) {
      errores.mail = "Esto no es un mail";
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
  console.log(state)


  function handleSubmit(e) {

    const newmensaje= { 
      name: state.name,
      lastname: state.lastname,
      email: state.email,
      comentario : state.comentario
    }
    e.preventDefault()
    dispatch(PostContact(newmensaje))
  
alert("mensaje enviado")

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
              <spam style={{ color: "red" }}> * this field is requerid </spam>
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
              onChange={(e) =>handleInputChange(e)}
              key="email"
              type="text"
              placeholder="type your email adress"
              name="email"
              value={state.email}
              required
            />
            {errores && errores.mail ? (
              <spam style={{ color: "red" }}> * {errores.mail} </spam>
            ) : null}
          </div>

          <div className={Style.info}>
            {" "}
            <br />
            <label
              className={Style.label}
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              name="comentario"
            >
              Comentario{" "}
            </label>
            <textarea
              className={Style.input}
              onChange={(e) => handleInputChange(e)}
              key="comentario"
              placeholder=""
              name="comentario"
              value={state.comentario}
            />
            {errores && errores.comentario ? (
              <spam style={{ color: "red" }}> * this field is requerid </spam>
            ) : null}
          </div>
          <br />
          <button
            type="submit"
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

export default Contact;
