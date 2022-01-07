import axios from 'axios'
import {
  CREATE_TUTORIALS_SUCCESS,
  CREATE_TUTORIALS_ERROR,
  CREATE_TUTORIALS,
} from '../types/actionTypes'

import { addTutorialsUrl } from '../constants/urls'

const addTutorial =
  ({ title, description, published }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_TUTORIALS })

      const result = await axios.post(addTutorialsUrl, {
        title: title,
        description: description,
        published: published,
      })
      const { data } = result

      if (data?.id) {
        dispatch({
          type: CREATE_TUTORIALS_SUCCESS,
        })
        return true
      } else {
        dispatch({
          type: CREATE_TUTORIALS_ERROR,
        })
        return false
      }
    } catch (error) {
      dispatch({
        type: CREATE_TUTORIALS_ERROR,
      })
    }
  }

export default addTutorial
