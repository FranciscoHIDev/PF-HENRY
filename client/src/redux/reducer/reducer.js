import {
  GET_ALL_CARS,
  GET_BY_NAME,
  GET_BY_ID,
  SORT_BY_PRICE,
  SEARCH,
  CLEAR_DETAIL
} from "../actions/actions";

const initialState = {
  cars: [],
  allCars: [],
  details: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CARS:
      return {
        ...state,
        cars: action.payload,
        allCars: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allCards: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        details: action.payload,
      };
    case SORT_BY_PRICE:
       const data = state.cars;
      const weightArr =
        action.payload === "menor"
          ? data.sort((a, b) => a.price - b.price)
          : data.sort((a, b) => b.price - a.price);
      return {
        ...state,
        cars: [...weightArr],
      };
    case SEARCH: {
      let search = [];
      search = state.cars.filter((c) =>
        c.brand.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        cars: [...search],
      };
    }
    case CLEAR_DETAIL:
      return {
        ...state,
        details: initialState.details
      };
    default:
      return state;
  }
};
export default rootReducer;
