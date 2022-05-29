import {deleteApi, getApi} from '../../utils/apiHelpers';
import {
  GET_ALL_PARTICIPATION,
  GET_ALL_PARTICIPATION_SUCCESS,
} from '../actionTypes';

const getAllParticipations = () => {
  return {
    type: GET_ALL_PARTICIPATION,
  };
};

export const getAllParticipationsSuccess = data => {
  return {
    type: GET_ALL_PARTICIPATION_SUCCESS,
    payload: data,
  };
};

export const getAllPariticipationsByUser = (id, token) => async dispatch => {
  try {
    let config = {
      headers: {
        'access-token': token,
      },
    };
    let result = await getApi(`participation/user/${id}`, config);
    console.log('Result', result);
    dispatch(getAllParticipationsSuccess(result.result));
  } catch (error) {}
};

export const deleteParticipation = (userId, id, token) => async dispatch => {
  try {
    let config = {
      headers: {
        'access-token': token,
      },
    };
    let result = await deleteApi(`participation/delete/${id}`, config);
    if (result) {
      dispatch(getAllPariticipationsByUser(userId, token));
    }
  } catch (error) {}
};
