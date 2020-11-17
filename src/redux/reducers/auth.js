import * as ActionTypes from '../actions/ActionTypes';

export const Auth = ( state = { isLoading: false, 
    errMess: null,
    isLoged: false }, action) => {
        switch (action.type) {
            case ActionTypes.LOGGIN_LOADING:
                return {...state, isLoading: true};
            case ActionTypes.SET_LOGGEDIN:
                return {...state, isLoading: false, isLoged: true};
            case ActionTypes.LOGGIN_FAILED:
                return{...state, isLoading: false, isLoged: false, errMess: action.payload };
            case ActionTypes.REGISTER_LOADING:
                return {...state, isLoading: true};
            case ActionTypes.REGISTER_SUCCES:
                return{...state, isLoading: false};
            case ActionTypes.REGISTER_FAILED:
                return{...state, isLoading: false, isLoged: false, errMess: action.payload };
            default:
                return state;
        }
    }