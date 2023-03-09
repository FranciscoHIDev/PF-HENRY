import axios from "axios";
export const GET_ALL_CARS = "GET_ALL_CARS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const SEARCH = "SEARCH";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const ALL_FILTER = "ALL_FILTER"
export const PUSH= "PUSH";
export const DELETE_FIL="DELETE_FIL"
export const RENDER_INFO_USERS= "RENDER_INFO_USERS";

export const getAllCars = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:3001/cars");
    dispatch({
      type: "GET_ALL_CARS",
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};


export const getCarsByName = (name) => {
  return {
    type: "GET_BY_NAME",
    payload: name,
  };
};

export const getCardsById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/cars/idcar/${id}`);
      return dispatch({
        type: "GET_BY_ID",
        payload: response.data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const sortByPrice = (payload) => {
  return {
    type: "SORT_BY_PRICE",
    payload,
  };
};

export const setSearch = (payload) => {
  return {
    type: "SEARCH",
    payload,
  };
};

export const clearDetail = () => {
  return {
    type: "CLEAR_DETAIL"
  }
}

export const allFilter = () => {
  return {
    type: "ALL_FILTER",
  };
};

export const push = (payload) => {
  return {
    type: "PUSH",
    payload,
  };
};

export const deletefil = (payload) => {
  return {
    type: "DELETE_FIL",
    payload,
  };
};

export const createUser = async(payload) => {
  const userCreate = await axios.post("http://localhost:3001/users", payload);
  return userCreate.data
}

export const renderInfoUsers = async (id) => {
  const infoUser = await axios.get(`http://localhost:3001/users/${id}` )
  return {
    type: "RENDER_INFO_USERS",
    payload
  }
} 
export const AllUsers = async() => {
  const allUsers = await axios.get("http://localhost:3001/users");
  return allUsers.data
}
