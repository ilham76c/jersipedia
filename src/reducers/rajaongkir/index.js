import {GET_PROVINCES} from '../../actions/RajaOngkirAction';

const initialState = {
  getProvincesLoading: false,
  getProvincesResult: false,
  getProvincesError: false,
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
    default:
      return state;
  }
}
