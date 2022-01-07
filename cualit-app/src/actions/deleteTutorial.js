import axios from 'axios'
import {
  DELETE_TUTORIAL_SUCCESS,
  DELETE_TUTORIAL_ERROR,
  DELETE_TUTORIAL,
} from '../types/actionTypes'

import { deleteTutorialUrl } from '../constants/urls'

const deleteTutorial =
  ({ id }) =>
  async (dispatch) => {
    try {
      dispatch({ type: DELETE_TUTORIAL })

      const result = await axios.delete(`${deleteTutorialUrl}/${id}`)
      const { data } = result
      if (data.success) {
        dispatch({
          type: DELETE_TUTORIAL_SUCCESS,
        })
        return data
      } else {
        dispatch({
          type: DELETE_TUTORIAL_ERROR,
        })
        return false
      }
    } catch (error) {
      dispatch({
        type: DELETE_TUTORIAL_ERROR,
      })
    }
  }

export default deleteTutorial
