import axios from 'axios';

import {
    GET_ROLE,
    GET_ROLES,
    ROLE_LOADING,

    GET_WALLET,
    GET_WALLETS,
    WALLET_LOADING,

    GET_FOODCATEGORY,
    GET_FOODCATEGORIES,
    FOODCATEGORY_LOADING,

    GET_MEMBERSHIP,
    GET_MEMBERSHIPS,
    MEMBERSHIP_LOADING,

    GET_ERRORS
} from '../actions/types';

//Create role
export const createRole = (roleData, history) => dispatch => {
    axios
        .post('/role', roleData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get role by id
export const getRoleById = roleid => dispatch => {
    dispatch(setRoleLoading());

    axios
        .get(`/api/role/${roleid}`)
        .then(res =>
            dispatch({
                type: GET_ROLE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ROLE,
                payload: null
            })
        );
};

// Get all roles
export const getRoles = () => dispatch => {
    dispatch(setRoleLoading());
    axios
        .get('/api/role/all')
        .then(res =>
            dispatch({
                type: GET_ROLES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ROLES,
                payload: null
            })
        );
};

// Delete Role
export const deleteRole = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/api/role')
            .then(res =>
                dispatch({
                    type: GET_ROLES,
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

// Role loading
export const setRoleLoading = () => {
    return {
        type: ROLE_LOADING
    };
};

//Create wallet
export const createWallet = (walletData, history) => dispatch => {
    axios
        .post('/wallet', walletData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get wallet by id
export const getWalletById = walletid => dispatch => {
    dispatch(setWalletLoading());

    axios
        .get(`/api/wallet/${walletid}`)
        .then(res =>
            dispatch({
                type: GET_WALLET,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_WALLET,
                payload: null
            })
        );
};

// Get all wallets
export const getWallets = () => dispatch => {
    dispatch(setWalletLoading());
    axios
        .get('/api/wallet/all')
        .then(res =>
            dispatch({
                type: GET_WALLETS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_WALLETS,
                payload: null
            })
        );
};

// Delete Wallet
export const deleteWallet = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/api/wallet')
            .then(res =>
                dispatch({
                    type: GET_WALLETS,
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

// wallet loading
export const setWalletLoading = () => {
    return {
        type: WALLET_LOADING
    };
};

//Create food category
export const createFoodCategory = (foodCategoryData, history) => dispatch => {
    axios
        .post('/foodcategory', foodCategoryData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get food category by id
export const getFoodCategoryById = foodCategoryid => dispatch => {
    dispatch(setFoodCategoryLoading());

    axios
        .get(`/api/foodcategory/${foodCategoryid}`)
        .then(res =>
            dispatch({
                type: GET_FOODCATEGORY,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_FOODCATEGORY,
                payload: null
            })
        );
};

// Get all food category
export const getFoodCategories = () => dispatch => {
    dispatch(setFoodCategoryLoading());
    axios
        .get('/api/foodcategory/all')
        .then(res =>
            dispatch({
                type: GET_FOODCATEGORIES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_FOODCATEGORIES,
                payload: null
            })
        );
};

// Delete food category
export const deleteFoodCategory = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/api/foodcategory')
            .then(res =>
                dispatch({
                    type: GET_FOODCATEGORIES,
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

// food category loading
export const setFoodCategoryLoading = () => {
    return {
        type: FOODCATEGORY_LOADING
    };
};

//Create MEMBERSHIP
export const createMembership = (membershipData, history) => dispatch => {
    axios
        .post('/membership', membershipData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get membership by id
export const getMembershipById = membershipid => dispatch => {
    dispatch(setMembershipLoading());

    axios
        .get(`/api/membership/${membershipid}`)
        .then(res =>
            dispatch({
                type: GET_MEMBERSHIP,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_MEMBERSHIP,
                payload: null
            })
        );
};

// Get all memberships
export const getMemberships = () => dispatch => {
    dispatch(setMembershipLoading());
    axios
        .get('/api/membership/all')
        .then(res =>
            dispatch({
                type: GET_MEMBERSHIPS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_MEMBERSHIPS,
                payload: null
            })
        );
};

// Delete membership
export const deleteMembership = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/api/membership')
            .then(res =>
                dispatch({
                    type: GET_MEMBERSHIPS,
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

// membership loading
export const setMembershipLoading = () => {
    return {
        type: MEMBERSHIP_LOADING
    };
};
