import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../../validation/is-empty';

const initState = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            console.log('...setting current user');
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}

export default authReducer