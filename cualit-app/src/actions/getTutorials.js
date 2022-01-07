import axios from 'axios'
import {
  FETCH_TUTORIALS_SUCCESS,
  FETCH_TUTORIALS_ERROR,
  FETCH_TUTORIALS,
} from '../types/actionTypes'

import { getTutorialsUrl } from '../constants/urls'

const getTutorials = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_TUTORIALS })

    const result = await axios(getTutorialsUrl)

    if (result?.data?.length > 0) {
      dispatch({
        type: FETCH_TUTORIALS_SUCCESS,
        payload: result.data,
      })
      return result.data
    } else {
      dispatch({
        type: FETCH_TUTORIALS_ERROR,
        payload: [],
      })
      return result.data
    }
  } catch (error) {
    dispatch({
      type: FETCH_TUTORIALS_ERROR,
    })
  }
}

export default getTutorials
