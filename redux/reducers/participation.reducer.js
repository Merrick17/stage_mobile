import {
  GET_ALL_PARTICIPATION,
  GET_ALL_PARTICIPATION_SUCCESS,
} from '../actionTypes';

const initParticipation = {
  loading: false,
  list: [],
};

const participationReducer = (state = initParticipation, action) => {
  let {type, payload} = action;
  switch (type) {
    case GET_ALL_PARTICIPATION:
      return {...state, loading: true};
    case GET_ALL_PARTICIPATION_SUCCESS:
      return {...state, loading: false, list: payload};

    default:
      return state;
  }
};
export default participationReducer;
