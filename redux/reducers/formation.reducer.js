import {GET_ALL_FORMATIONS, GET_ALL_FORMATIONS_SUCCESS} from '../actionTypes';

const initFormation = {
  loading: false,
  list: [],
};

const formationReducer = (state = initFormation, action) => {
  let {type, payload} = action;
  switch (type) {
    case GET_ALL_FORMATIONS:
      return {...state, loading: true};
    case GET_ALL_FORMATIONS_SUCCESS:
      return {...state, loading: false, list: payload};

    default:
      return state;
  }
};
export default formationReducer;
