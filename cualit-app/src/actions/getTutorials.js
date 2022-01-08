import axios from 'axios';
import {
  FETCH_TUTORIALS_SUCCESS,
  FETCH_TUTORIALS_ERROR,
  FETCH_TUTORIALS,
} from '../types/actionTypes';

import { getTutorialsUrl } from '../constants/urls';
import { setToken } from '../utils/sessionStorage';

const getTutorials = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_TUTORIALS });

    const result = await axios(getTutorialsUrl);

    const { data, token } = result?.data;

    if (token) {
      setToken(token);
    }

    if (data?.length > 0) {
      dispatch({
        type: FETCH_TUTORIALS_SUCCESS,
        payload: data,
      });
      return data;
    } else {
      dispatch({
        type: FETCH_TUTORIALS_ERROR,
        payload: [],
      });
      return data;
    }
  } catch (error) {
    dispatch({
      type: FETCH_TUTORIALS_ERROR,
    });
  }
};

export default getTutorials;
