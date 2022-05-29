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
