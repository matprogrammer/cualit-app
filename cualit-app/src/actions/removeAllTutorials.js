import axios from 'axios';
import {
  REMOVE_ALL_TUTORIALS_SUCCESS,
  REMOVE_ALL_TUTORIALS_ERROR,
  REMOVE_ALL_TUTORIALS,
} from '../types/actionTypes';

import { removeAllTutorialsUrl } from '../constants/urls';
import { getToken } from '../utils/sessionStorage';

const removeAllTutorials = () => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_ALL_TUTORIALS });

    const token = await getToken();
    if (token) {
      const result = await axios.delete(removeAllTutorialsUrl, {
        data: { token },
      });
      if (result) {
        dispatch({
          type: REMOVE_ALL_TUTORIALS_SUCCESS,
          payload: [],
        });
        return result.data;
      } else {
        dispatch({
          type: REMOVE_ALL_TUTORIALS_ERROR,
        });
      }
    }
  } catch (error) {
    dispatch({
      type: REMOVE_ALL_TUTORIALS_ERROR,
    });
  }
};

export default removeAllTutorials;
