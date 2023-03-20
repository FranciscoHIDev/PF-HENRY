import axios from "axios";

export const GET_ALL_CARS = "GET_ALL_CARS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const SEARCH = "SEARCH";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const ALL_FILTER = "ALL_FILTER"
export const PUSH = "PUSH";
export const DELETE_FIL = "DELETE_FIL"
export const RENDER_INFO_USERS = "RENDER_INFO_USERS";
export const POST_CONTACT = "POST_CONTACT"
export const POST_USERS = "POST_USERS"
export const POST_CAR = "POST_CAR"
export const FRANGE = "FRANGE"
export const LINK_COMPRA = "LINK_COMPRA"
export const POST_FAVORITE = "POST_FAVORITE"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const PUT_USERS = "PUT_USERS"
export const getAllCars = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/cars");
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

export const frange = (payload) => {
  return {
    type: "FRANGE",
    payload: payload,
  };
};

export const getCardsById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/cars/idcar/${id}`);
      return dispatch({
        type: "GET_BY_ID",
        payload: response.data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

/* export const linkcompra = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/cars/comprar`);
      return dispatch({
        type: "LINK_COMPRA",
        payload: response,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
}; */

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

export const createUser = (payload) => async (dispatch) => {
  try {
    const userCreate = await axios.post("/users", payload);
    return dispatch({
      type: "POST_USERS",
      payload: userCreate,

    });
  }
  catch (e) {
    console.log(e);
  }
}

export const putUser = (id , payload) => async (dispatch) => {
  try {
    const putCreate = await axios.put(`/users/`+id ,  payload);
    return dispatch({
      type: "PUT_USERS",
      payload: putCreate,

    });
  }
  catch (e) {
    console.log(e);
  }
}

export const renderInfoUsers = async (id) => {
  const infoUser = await axios.get(`/users/${id}`)
  return {
    type: "RENDER_INFO_USERS",
    payload
  }
}


export const getAllUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/users");
    dispatch({
      type: "GET_ALL_USERS",
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
}
export const postContact = (payload) => async (dispatch) => {
  try {
    const data = await axios.post("http://localhost:3001/contact", payload);
    return dispatch({
      type: "POST_CONTACT",
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const postCar = (payload) => async (dispatch) => {
  try {
    const carCreated = await axios.post("/cars", payload);
    return dispatch({
      type: "POST_CAR",
      payload: carCreated,
    });
  } catch (e) {
    console.log(e);
  }
};

export const postFavorite = (payload) => {
  try {
    const addFavorite = axios.post("/users/favorite", payload);
    return {
      type: "POST_FAVORITE",
      payload: addFavorite,
    };
  } catch (e) {
    console.log(e);
  }
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        