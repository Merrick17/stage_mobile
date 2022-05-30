import {LOGIN_USER, LOGIN_USER_SUCCESS} from '../actionTypes';
import {postApi} from '../../utils/apiHelpers';
const loginUser = () => {
  return {
    type: LOGIN_USER,
  };
};
const loginUserSuccess = data => {
  console.log('Dispatch');
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
  };
};

export const loginUserApi = (body, navigation) => async dispatch => {
  try {
    dispatch(loginUser());
    let result = await postApi('users/login', body);
    console.log('Result', result);
    if (result && result.success) {
      console.log('RESULT', result.result);
      let payload = {
        token: result.result.token,
        user: result.result.user,
      };
      dispatch(loginUserSuccess(payload));
      navigation.replace('main');

      //   localStorage.setItem('token', result.result.token);
      //   localStorage.setItem('user', JSON.stringify(result.result.user));
      //   if (result.result.ste) {
      //     localStorage.setItem('ste', JSON.stringify(result.result.ste));
      //   }
    } else {
      //addToast('Adresse ou mot de passe incorrect', {appearance: 'error'});
    }
  } catch (error) {
    console.log('error', error.message);
  }
};
export const registerUserApi = (body, toast) => async dispatch => {
  try {
    console.log('TOAST', toast);
    // dispatch(registerUser());
    let result = await postApi('users/register/', body);
    if (result.success) {
      console.log('Result LOGIn', result);
      toast.show('Inscription success veuillez vous conecter', {
        type: 'success',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'zoom-in',
      });
    } else {
      // addToast('Erreur veuillez resssayer', {appearance: 'error'});
      toast.show('Erreur veuillez resssayer', {
        type: 'danger',
        placement: 'bottom',
        duration: 4000,
        offset: 30,
        animationType: 'zoom-in',
      });
    }

    // dispatch(registerUserSuccess(result));
  } catch (error) {
    console.log('error', error.message);
  }
};
