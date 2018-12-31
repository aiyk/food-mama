import axios from 'axios';

import {
    GET_DISPATCH,
    GET_DISPATCHS,
    DISPATCH_LOADING,
    GET_ERRORS
} from './types';

//Create Dispatch
export const createDispatch = (dispatchData, history) => dispatch => {
    axios
        .post('/dispatch', dispatchData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get Dispatch by id
export const getDispatchById = dispatchid => dispatch => {
    dispatch(setDispatchLoading());

    axios
        .get(`/api/dispatch/${dispatchid}`)
        .then(res =>
            dispatch({
                type: GET_DISPATCH,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_DISPATCH,
                payload: null
            })
        );
};

// Get all dispatch
export const getDispatchs = () => dispatch => {
    dispatch(setDispatchLoading());
    axios
        .get('/api/dispatch/all')
        .then(res =>
            dispatch({
                type: GET_DISPATCHS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_DISPATCHS,
                payload: null
            })
        );
};

// Delete Dispatch
export const deleteDispatch = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/api/dispatch')
            .then(res =>
                dispatch({
                    type: GET_DISPATCH,
                    payload: null
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

// dispatch loading
export const setDispatchLoading = () => {
    return {
        type: DISPATCH_LOADING
    };
};
