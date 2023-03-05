import {
  GET_ALL_CARS,
  GET_BY_NAME,
  GET_BY_ID,
  SORT_BY_PRICE,
  SEARCH,
  CLEAR_DETAIL,
  CATEGORY_FILTER,
  FILTER_TRANSISSION_TYPE
} from "../actions/actions";

const initialState = {
  allCars: [], // esta es la original
  cars: [],  // esta tiene ordenamiento y filtros
  details: [], // solo para el id
  filterTransission: []
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
        cars: action.payload,
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
    case CATEGORY_FILTER:
      let stateCars = state.allCars
      let resCat = stateCars.filter(e => e.category.includes(action.payload)) // se filtra allCars y se llena cars
      return {
        ...state,
        cars: resCat
      }   
    case FILTER_TRANSISSION_TYPE:
      const response = state.allCars.filter(e => e.transissionType.includes(action.payload))  // se filtra allCars y se llena cars 
      return {
        ...state,
        cars: response
      }
    default:
      return state;
  }
};
export default rootReducer;
