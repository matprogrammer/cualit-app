import axios from 'axios';
import {
  FIND_TUTORIALS_SUCCESS,
  FIND_TUTORIALS_ERROR,
  FIND_TUTORIALS,
} from '../types/actionTypes';

import { findTutorialUrl } from '../constants/urls';

const findTutorial =
  ({ title }) =>
  async (dispatch) => {
    try {
      dispatch({ type: FIND_TUTORIALS });

      const result = await axios.get(`${findTutorialUrl}?title=${title}`);

      const { data } = result?.data;
      if (data?.length) {
        dispatch({
          type: FIND_TUTORIALS_SUCCESS,
        });
        return data;
      } else {
        dispatch({
          type: FIND_TUTORIALS_ERROR,
        });
        return [];
      }
    } catch (error) {
      dispatch({
        type: FIND_TUTORIALS_ERROR,
      });
    }
  };

export default findTutorial;
