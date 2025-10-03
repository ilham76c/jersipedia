import {GET_PROVINCES, GET_CITIES} from '../../actions/RajaOngkirAction';

const initialState = {
  getProvincesLoading: false,
  getProvincesResult: false,
  getProvincesError: false,

  getCitiesLoading: false,
  getCitiesResult: false,
  getCitiesError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROVINCES:
      return {
        ...state,
        getProvincesLoading: action.payload.loading,
        getProvincesResult: action.payload.data,
        getProvincesError: action.payload.errorMessage,
      };
    case GET_CITIES:
      return {
        ...state,
        getCitiesLoading: action.payload.loading,
        getCitiesResult: action.payload.data,
        getCitiesError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
