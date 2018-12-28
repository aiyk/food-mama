import axios from 'axios';

import {
    GET_BRANCH,
    GET_BRANCHES,
    BRANCH_LOADING,
    GET_ERRORS
} from './types';

//Create branch
export const createBranch = (branchData, history) => dispatch => {
    axios
        .post('/branch', branchData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get branch by id
export const getBranchById = branchid => dispatch => {
    dispatch(setBranchLoading());

    axios
        .get(`/api/branch/${branchid}`)
        .then(res =>
            dispatch({
                type: GET_BRANCH,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_BRANCH,
                payload: null
            })
        );
};

// Get all branches
export const getBranches = () => dispatch => {
    dispatch(setBranchLoading());
    axios
        .get('/api/branch/all')
        .then(res =>
            dispatch({
                type: GET_BRANCHES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_BRANCHES,
                payload: null
            })
        );
};

// Delete branch
export const deleteBranch = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/api/branch')
            .then(res =>
                dispatch({
                    type: GET_BRANCHES,
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

// Branch loading
export const setBranchLoading = () => {
    return {
        type: BRANCH_LOADING
    };
};
