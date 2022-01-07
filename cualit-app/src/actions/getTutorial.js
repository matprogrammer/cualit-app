import axios from 'axios'
import {
  FETCH_TUTORIAL_SUCCESS,
  FETCH_TUTORIAL_ERROR,
  FETCH_TUTORIAL,
} from '../types/actionTypes'

import { getTutorialUrl } from '../constants/urls'

const getTutorial =
  ({ id }) =>
  async (dispatch) => {
    try {
      dispatch({ type: FETCH_TUTORIAL })

      const result = await axios(`${getTutorialUrl}/${id}`)

      if (result?.data?.id) {
        dispatch({
          type: FETCH_TUTORIAL_SUCCESS,
        })
        return result.data
      } else {
        dispatch({
          type: FETCH_TUTORIAL_ERROR,
        })
        return false
      }
    } catch (error) {
      dispatch({
        type: FETCH_TUTORIAL_ERROR,
      })
    }
  }

export default getTutorial
