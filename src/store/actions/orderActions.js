import axios from 'axios';

import {
    GET_ORDER,
    GET_ORDERS,
    ORDER_LOADING,
    GET_ERRORS
} from './types';

//Create ORDER
export const createOrder = (orderData, history) => dispatch => {
    axios
        .post('/order', orderData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get order by id
export const getOrderById = orderid => dispatch => {
    dispatch(setOrderLoading());

    axios
        .get(`/api/order/${orderid}`)
        .then(res =>
            dispatch({
                type: GET_ORDER,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ORDER,
                payload: null
            })
        );
};

// Get all order
export const getOrders = () => dispatch => {
    dispatch(setOrderLoading());
    axios
        .get('/api/order/all')
        .then(res =>
            dispatch({
                type: GET_ORDERS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ORDERS,
                payload: null
            })
        );
};

// Delete order
export const deleteOrder = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/api/order')
            .then(res =>
                dispatch({
                    type: GET_ORDER,
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

// order loading
export const setOrderLoading = () => {
    return {
        type: ORDER_LOADING
    };
};
