import {getApi} from '../../utils/apiHelpers';
import {
  GET_ALL_SUBSCRIPTIONS,
  GET_ALL_SUBSCRIPTIONS_SUCCESS,
} from '../actionTypes';

const getAllSub = () => {
  return {
    type: GET_ALL_SUBSCRIPTIONS,
  };
};

export const getAllSubSuccess = data => {
  return {
    type: GET_ALL_SUBSCRIPTIONS_SUCCESS,
    payload: data,
  };
};

export const getAllSubscriptionsApi = (id, token) => async dispatch => {
  try {
    let config = {
      headers: {
        'access-token': token,
      },
    };
    dispatch(getAllSub());
    let result = await getApi('subscribtions/' + id, config);
    if (result) {
      dispatch(getAllSubSuccess(result.result));
    }
  } catch (error) {}
};
