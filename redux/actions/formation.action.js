import {getApi, postApi} from '../../utils/apiHelpers';
import {GET_ALL_FORMATIONS, GET_ALL_FORMATIONS_SUCCESS} from '../actionTypes';

const getAllFormations = () => {
  return {
    type: GET_ALL_FORMATIONS,
  };
};

export const getAllFormationsSuccess = payload => {
  return {
    type: GET_ALL_FORMATIONS_SUCCESS,
    payload: payload,
  };
};

export const getAllFormationsApi = token => async dispatch => {
  try {
    dispatch(getAllFormations());
    let config = {
      headers: {
        'access-token': token,
      },
    };
    let result = await getApi('formation', config);
    console.log('Result', result);
    dispatch(getAllFormationsSuccess(result.result));
  } catch (error) {}
};

export const addFormationParticipationApi =
  (data, token, toast) => async dispatch => {
    try {
      let config = {
        headers: {
          'access-token': token,
        },
      };
      let result = await postApi('subscribtions/add', data, config);
      if (result) {
        toast.show('Une demande est envoyé vous recevrez une notification', {
          type: 'success',
          placement: 'bottom',
          duration: 4000,
          offset: 30,
          animationType: 'zoom-in',
        });
      }
      dispatch(getAllFormationsApi(token));
    } catch (error) {}
  };
