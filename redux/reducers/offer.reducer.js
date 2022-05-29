import {GET_ALL_OFFERS, GET_ALL_OFFERS_SUCCESS} from '../actionTypes';
const offerInitState = {
  loading: false,
  list: [],
};

const offerReducer = (state = offerInitState, action) => {
  let {type, payload} = action;
  switch (type) {
    case GET_ALL_OFFERS:
      return {...state, loading: true};
    case GET_ALL_OFFERS_SUCCESS:
      return {...state, loading: false, list: payload};
    default:
      return state;
  }
};
export default offerReducer;
