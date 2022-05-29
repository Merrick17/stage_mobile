import {getApi} from '../../utils/apiHelpers';
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
