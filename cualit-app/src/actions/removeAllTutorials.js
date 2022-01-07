import axios from 'axios'
import {
  REMOVE_ALL_TUTORIALS_SUCCESS,
  REMOVE_ALL_TUTORIALS_ERROR,
  REMOVE_ALL_TUTORIALS,
} from '../types/actionTypes'

import { removeAllTutorialsUrl } from '../constants/urls'

const removeAllTutorials = () => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_ALL_TUTORIALS })

    const result = await axios.delete(removeAllTutorialsUrl)

    if (result) {
      dispatch({
        type: REMOVE_ALL_TUTORIALS_SUCCESS,
        payload: [],
      })
      return result.data
    } else {
      dispatch({
        type: REMOVE_ALL_TUTORIALS_ERROR,
      })
    }
  } catch (error) {
    dispatch({
      type: REMOVE_ALL_TUTORIALS_ERROR,
    })
  }
}

export default removeAllTutorials
