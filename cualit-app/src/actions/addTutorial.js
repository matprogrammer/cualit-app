import axios from 'axios';
import {
  CREATE_TUTORIALS_SUCCESS,
  CREATE_TUTORIALS_ERROR,
  CREATE_TUTORIALS,
} from '../types/actionTypes';

import { addTutorialsUrl } from '../constants/urls';
import { getToken } from '../utils/sessionStorage';

const addTutorial =
  ({ title, description, published, video }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_TUTORIALS });

      const token = await getToken();

      if (token) {
        const result = await axios.post(addTutorialsUrl, {
          title: title,
          description: description,
          video: video,
          published: published,
          token: token,
        });

        const { id } = result.data;
        if (id) {
          dispatch({
            type: CREATE_TUTORIALS_SUCCESS,
          });
          return true;
        } else {
          dispatch({
            type: CREATE_TUTORIALS_ERROR,
          });
          return false;
        }
      } else {
        dispatch({
          type: CREATE_TUTORIALS_ERROR,
        });
      }
    } catch (error) {
      dispatch({
        type: CREATE_TUTORIALS_ERROR,
      });
    }
  };

export default addTutorial;
