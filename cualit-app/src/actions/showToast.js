import { HIDE_TOAST, SHOW_TOAST } from '../types/actionTypes';

const showToast =
  ({ status, type, message }) =>
  (dispatch) => {
    if (status === true) {
      dispatch({
        type: SHOW_TOAST,
        payload: {
          show: status,
          type,
          message,
        },
      });
    } else {
      dispatch({
        type: HIDE_TOAST,
        payload: false,
      });
    }
  };

export default showToast;
