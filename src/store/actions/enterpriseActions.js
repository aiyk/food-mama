import axios from 'axios';

import {
    GET_ENTERPRISE,
    GET_ENTERPRISES,
    ENTERPRISE_LOADING,
    GET_ERRORS
} from './types';

//Create enterprise
export const createEnterprise = (enterpriseData, history) => dispatch => {
    axios
        .post('/enterprise', enterpriseData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get enterprise by id
export const getEnterpriseById = enterpriseid => dispatch => {
    dispatch(setEnterpriseLoading());

    axios
        .get(`/api/enterprise/${enterpriseid}`)
        .then(res =>
            dispatch({
                type: GET_ENTERPRISE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ENTERPRISE,
                payload: null
            })
        );
};

// Get all enterprises
export const getEnterprises = () => dispatch => {
    dispatch(setEnterpriseLoading());
    axios
        .get('/api/enterprise/all')
        .then(res =>
            dispatch({
                type: GET_ENTERPRISES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ENTERPRISES,
                payload: null
            })
        );
};

// Delete enterprise
export const deleteEnterprise = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/api/enterprise')
            .then(res =>
                dispatch({
                    type: GET_ENTERPRISES,
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

// Enterprise loading
export const setEnterpriseLoading = () => {
    return {
        type: ENTERPRISE_LOADING
    };
};
