import axios from 'axios';
import {
  EDIT_TUTORIAL_SUCCESS,
  EDIT_TUTORIAL_ERROR,
  EDIT_TUTORIAL,
} from '../types/actionTypes';

import { editTutorialUrl } from '../constants/urls';
import { getToken } from '../utils/sessionStorage';

const editTutorial =
  ({ id, title, description, published, video }) =>
  async (dispatch) => {
    try {
      dispatch({ type: EDIT_TUTORIAL });

      const token = await getToken();
      if (token) {
        const result = await axios.put(`${editTutorialUrl}/${id}`, {
          title,
          description,
          published,
          video,
          token,
        });
        const { data } = result;
        if (data.success) {
          dispatch({
            type: EDIT_TUTORIAL_SUCCESS,
          });
          return data;
        } else {
          dispatch({
            type: EDIT_TUTORIAL_ERROR,
          });
          return false;
        }
      }
    } catch (error) {
      dispatch({
        type: EDIT_TUTORIAL_ERROR,
      });
    }
  };

export default editTutorial;
