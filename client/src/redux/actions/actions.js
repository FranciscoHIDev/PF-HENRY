import axios from "axios"
export const GET_ALL_CARS = "GET_ALL_CARS";


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