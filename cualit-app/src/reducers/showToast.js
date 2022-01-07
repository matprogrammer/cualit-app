import { ErrorType } from '../constants/errorType';
import * as actions from '../types/actionTypes';

const initialState = {
  show: false,
  type: ErrorType.SUCCESS,
  message: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_TOAST:
      return {
        show: true,
        type: action.payload.type,
        message: action.payload.message,
      };

    case actions.HIDE_TOAST:
      return {
        show: false,
      };
    default:
      return state;
  }
}
