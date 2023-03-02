import { GET_ALL_CARS } from "../actions/actions";

const initialState = {
    cars: [],
    allCars: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CARS:
            return {
                ...state,
                cars: action.payload,
                allCars: action.payoad,
            };
        default:
            return state;
    }
}

export default rootReducer;