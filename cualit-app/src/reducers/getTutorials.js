import * as actions from '../types/actionTypes';

const initialState = {
  tutorials: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_TUTORIALS:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_TUTORIALS_ERROR:
      return {
        tutorials: [],
        loading: false,
      };
    case actions.FETCH_TUTORIALS_SUCCESS:
      return {
        tutorials: action.payload,
        loading: false,
      };
    case actions.REMOVE_ALL_TUTORIALS_SUCCESS:
      return {
        tutorials: [],
        loading: false,
      };
    default:
      return state;
  }
}
