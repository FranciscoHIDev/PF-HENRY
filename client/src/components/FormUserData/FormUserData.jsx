import React from "react";


function FormUserData() {
  
  const validate = (input) => {
    const errors = {};
    
    if(!input.name) {
      errors.name = "You must enter a breed name";
    } else if(!/^[a-zA-Z]+$/.test(input.name)) {
      errors.name = "Invalid name. The name must contain letters";
    } else if(input.name.length < 2) {
      errors.name = "The name must contain at least 2 letters"
    } else if(input.name.length < 2 || input.name.length > 20) {
      errors.name = "At least 2 letters, less than 20";
    } else if(dogs.includes(input.name)) {
      errors.name = "The dog already exists, use another name";
    };

    if(!input.email) {
      errors.email = "you need to enter a valid email";
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.name)) {
      errors.name = "Invalid name. The name must contain letters";
    }
  }
  return (
    <div>
      <label htmlFor="">Name: </label>
      <input type="text" />
      <label htmlFor="">Email: </label>
      <input type="text" />
      <label htmlFor="">Password: </label>
      <input type="text" />
    </div>
  )
}

export default FormUserData;