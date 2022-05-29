import {LOGIN_USER, LOGIN_USER_SUCCESS} from '../actionTypes';
const authInitState = {
  isAuth: false,
  loading: false,
  token: '',
  userInfo: null,
};

const authReducer = (state = authInitState, action) => {
  let {type, payload} = action;
  switch (type) {
    case LOGIN_USER:
      return {...state, loading: true};
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        userInfo: payload.user,
      };
    default:
      return state;
  }
};

export default authReducer;
