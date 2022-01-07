import axios from 'axios';
import {
  EDIT_TUTORIAL_SUCCESS,
  EDIT_TUTORIAL_ERROR,
  EDIT_TUTORIAL,
} from '../types/actionTypes';

import { editTutorialUrl } from '../constants/urls';

const editTutorial =
  ({ id, title, description, published }) =>
  async (dispatch) => {
    try {
      dispatch({ type: EDIT_TUTORIAL });

      const result = await axios.put(`${editTutorialUrl}/${id}`, {
        title: title,
        description: description,
        published: published,
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
    } catch (error) {
      dispatch({
        type: EDIT_TUTORIAL_ERROR,
      });
    }
  };

export default editTutorial;
