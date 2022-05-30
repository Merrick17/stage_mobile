import {
  GET_ALL_SUBSCRIPTIONS,
  GET_ALL_SUBSCRIPTIONS_SUCCESS,
} from '../actionTypes';

const initSubscription = {
  loading: false,
  list: [],
};

const SubscriptionReducer = (state = initSubscription, action) => {
  let {type, payload} = action;
  switch (type) {
    case GET_ALL_SUBSCRIPTIONS:
      return {...state, loading: true};
    case GET_ALL_SUBSCRIPTIONS_SUCCESS:
      return {...state, loading: false, list: payload};

    default:
      return state;
  }
};
export default SubscriptionReducer;
