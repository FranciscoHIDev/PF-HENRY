import { GET_ALL_CARS, SEARCH } from "../actions/actions";

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
        case SEARCH: {
            let search = []
            search = state.cars.filter((c) => c.model.toLowerCase().includes(action.payload.toLowerCase())) && state.cars.filter((c) => c.brand.toLowerCase().includes(action.payload.toLowerCase()))
            return {
                ...state,
                cars: [...search],

            }
        }
        default:
            return state;
    }
}

export default rootReducer;