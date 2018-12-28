import axios from 'axios';

import {
    GET_FOOD,
    GET_FOODS,
    FOOD_LOADING,
    GET_ERRORS
} from './types';

//Create FOOD
export const createFood = (foodData, history) => dispatch => {
    axios
        .post('/food', foodData)
        .then(res => history.push('/dashboard'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get food by id
export const getFoodById = foodid => dispatch => {
    dispatch(setFoodLoading());

    axios
        .get(`/api/food/${foodid}`)
        .then(res =>
            dispatch({
                type: GET_FOOD,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_FOOD,
                payload: null
            })
        );
};

// Get all food
export const getFoods = () => dispatch => {
    dispatch(setFoodLoading());
    axios
        .get('/api/food/all')
        .then(res =>
            dispatch({
                type: GET_FOODS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_FOODS,
                payload: null
            })
        );
};

// Delete food
export const deleteFood = () => dispatch => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        axios
            .delete('/api/food')
            .then(res =>
                dispatch({
                    type: GET_FOODS,
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

// food loading
export const setFoodLoading = () => {
    return {
        type: FOOD_LOADING
    };
};
