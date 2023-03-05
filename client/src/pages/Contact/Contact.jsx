import React, { useState } from 'react'
import NavBar from "../../components/NavBar/NavBar";
import Style from '../Contact/Contact.module.css'
function Contact() {

  const [state, setState] = useState({})
  const [errores, setErrores] = useState({})


  function validate(valor) {
    let errores = {}
    if (!valor.name) errores.name = "El campo nombre esta vacio"
    if (!valor.lastname) errores.lastname = "Este campo es requerido!"
    if (!valor.mail) errores.mail = "This fiel is empty"
    if (!valor.comentario) errores.comentario = "este campo esta vacio"
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/.test(valor.mail)) {
      errores.mail = "Esto no es un mail"
    }
return errores;
   
  }


  function handleInputChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,

    })
    setErrores(validate({
      ...state,
      [e.target.name]: e.target.value,
    }))
    console.log(errores)
  }
function handleSubmit(){
  return alert("usuario creado")
}
  return (
    <>
      <NavBar />


      <div className={Style.container}>


        <form onSubmit={handleSubmit} className={Style.formulario}>
          <div className={Style.info}>
            <label className={Style.label}>Name: </label>
            <input className={Style.input} onChange={(e)=>handleInputChange(e)}
               type="text" placeholder="ingrese su nombre" name="name" required />
              {errores && errores.name ? <spam style={{color: "red"}}> {errores.name} </spam> : null}
             </div>
             
             <div className={Style.info}>
            <label className={Style.label}>Lastname: </label>
            <input className={Style.input} onChange={(e)=>handleInputChange(e)}
              key="lastname" type="text" placeholder="ingrese su Apellido" name="lastname" required />
              {errores && errores.lastname ? <spam style={{color: "red"}}> * this field is requerid  </spam> : null}
             </div>
            
             <div className={Style.info}>
            <label className={Style.label}>Email: </label>
            <input className={Style.input} onChange={(e)=>handleInputChange(e)}
              key="mail" type="text" placeholder="ingrese su Email" name="mail" required />
              {errores && errores.mail ? <spam style={{color: "red"}}> * {errores.mail} </spam> : null}
             </div>
              
              
             <div className={Style.info}>
            <label className={Style.label} name="comentario" >Comentario: </label>
            <textarea className={Style.input} onChange={(e)=>handleInputChange(e)}
              key="comentario"  placeholder="ingrese su comentario" name="comentario" />
              {errores && errores.comentario ? <spam style={{color: "red"}}> * this field is requerid  </spam> : null}
             </div>
              
             <button   type="submit" name='submit' disabled={ Object.keys(errores).length === 0  ? false : true} >Enviar</button>
            

          

        </form>



      </div>

    </>
  )
}

export default Contact