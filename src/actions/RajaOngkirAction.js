import axios from 'axios';
import {RAJAONGKIR_BASE_URL} from '@env';
import {RAJAONGKIR_API_HEADER, RAJAONGKIR_API_TIMEOUT} from '../utils';

export const GET_PROVINCES = 'GET_PROVINCES';
export const GET_CITIES = 'GET_CITIES';

export const getProvinces = () => {
  return dispatch => {
    dispatch({
      type: GET_PROVINCES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${RAJAONGKIR_BASE_URL}/destination/province`, {
        headers: RAJAONGKIR_API_HEADER,
        timeout: RAJAONGKIR_API_TIMEOUT,
      })
      .then(response => {
        if (response.status !== 200) {
          dispatch({
            type: GET_PROVINCES,
            payload: {
              loading: false,
              data: false,
              errorMessage: response.meta.message,
            },
          });
        } else {
          dispatch({
            type: GET_PROVINCES,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: GET_PROVINCES,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });

        alert(error.message);
      });
  };
};

export const getCities = id_province => {
  return dispatch => {
    dispatch({
      type: GET_CITIES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios
      .get(`${RAJAONGKIR_BASE_URL}/destination/city/${id_province}`, {
        headers: RAJAONGKIR_API_HEADER,
        timeout: RAJAONGKIR_API_TIMEOUT,
      })
      .then(response => {
        if (response.status !== 200) {
          dispatch({
            type: GET_CITIES,
            payload: {
              loading: false,
              data: false,
              errorMessage: response.meta.message,
            },
          });
        } else {
          dispatch({
            type: GET_CITIES,
            payload: {
              loading: false,
              data: response.data,
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispatch({
          type: GET_PROVINCES,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });

        alert(error.message);
      });
  };
};
