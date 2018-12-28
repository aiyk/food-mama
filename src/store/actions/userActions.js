import axios from 'axios';

import {
  GET_USER,
  GET_USERS,
  USER_LOADING,
  CLEAR_CURRENT_USER,
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';

//Create user
export const createUser = (userData, history) => dispatch => {
  console.log(userData);
  axios
    .post('/sign-up', userData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

// Get current user
export const getCurrentUser = () => dispatch => {
  dispatch(setUserLoading());

  axios
    .get('/api/user')
    .then(res =>
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER,
        payload: {}
      })
    );
};
// Get user by id
export const getUserById = userid => dispatch => {
  dispatch(setUserLoading());

  axios
    .get(`/api/user/${userid}`)
    .then(res =>
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER,
        payload: null
      })
    );
};

// Get all users
export const getUsers = () => dispatch => {
  dispatch(setUserLoading());
  axios
    .get('/api/user/all')
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USERS,
        payload: null
      })
    );
};

// Delete account & USER
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/user')
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Clear user
export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER
  };
};
