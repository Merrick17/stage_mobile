import {add} from 'react-native-reanimated';
import {getApi, postApi} from '../../utils/apiHelpers';
import {GET_ALL_OFFERS, GET_ALL_OFFERS_SUCCESS} from '../actionTypes';

const getAllOffers = () => {
  return {
    type: GET_ALL_OFFERS,
  };
};

const getAllOffersSuccess = data => {
  return {
    type: GET_ALL_OFFERS_SUCCESS,
    payload: data,
  };
};

export const getAllOffersByTypeApi = (type, token) => async dispatch => {
  try {
    dispatch(getAllOffers());
    let config = {
      headers: {
        'access-token': token,
      },
    };
    let result = await getApi(`offre/${type}`, config);
    console.log('Result', result);
    dispatch(getAllOffersSuccess(result.result));
  } catch (error) {}
};

export const participateAtOffer = (data, token) => async dispatch => {
  try {
    let config = {
      headers: {
        'access-token': token,
        'Content-Type': 'multipart/form-data',
      },
    };
    console.log('ADD', data);
    let result = await postApi('participation/add', data, config);
    console.log('Result', result);
  } catch (error) {}
};
