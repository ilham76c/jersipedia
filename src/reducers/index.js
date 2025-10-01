import {combineReducers} from 'redux';
import userReducer from './user';
import rajaOngkirReducer from './rajaongkir';

const rootReducer = combineReducers({
  userReducer,
  rajaOngkirReducer,
});

export default rootReducer;
