import {
  GET_ALL_CARS,
  GET_BY_NAME,
  GET_BY_ID,
  SORT_BY_PRICE,
  SEARCH,
  CLEAR_DETAIL,
  ALL_FILTER,
  PUSH,
  DELETE_FIL,
  RENDER_INFO_USERS,
} from "../actions/actions";

const initialState = {
  cars: [],
  allCars: [],
  details: [],
  filtros: [],
  infoUsers: "",  
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
      search = state.allCars?.filter((c) =>
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
    case ALL_FILTER:{
      let arrfil = state.allCars
      const cfil = state.filtros
      if(cfil.length === 0){arrfil = state.allCars
        return{
          ...state,
          cars:arrfil
        }}
      else{ for (let i = 0; i < cfil.length; i++) {
        arrfil = arrfil.filter(e => e[cfil[i].propety].includes(cfil[i].value))}
        return{
          ...state,
          cars: arrfil
        }
      }
    }
    case PUSH: {
      return {
        ...state,
        filtros: [...state.filtros, action.payload]
      }
    }
    case DELETE_FIL :{
      let filt = state.filtros
      const ff = action.payload
      filt=filt.filter((e) => e.value !== ff)
      return{ 
        ...state,
        filtros: filt
      }
    }
    case "CREATE_USER":
      return {
        ...state,
        cars: action.payload
      }
    case RENDER_INFO_USERS:
      return {
        ...state,
        infoUsers: action.payload
      }
    default:
      return state;
  }
};
export default rootReducer;
