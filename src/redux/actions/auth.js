import * as ActionTypes from './ActionTypes';
import * as service from '../../api/authServices';

export const setLoggedIn=(isLoged)=>{
    return {
        type: ActionTypes.SET_LOGGEDIN,
        payload: isLoged
    }
}

export const setLogginLoading = () =>{
    return{
        type: ActionTypes.LOGGIN_LOADING
    }
}

export const logginFailed = (errMess) => {
    return{
        type: ActionTypes.LOGGIN_FAILED,
        payload: errMess
    }
}

export const setResgisterLoading = () => {
    return{
        type: ActionTypes.REGISTER_LOADING
    }
}

export const setRegisterSucces = () => {
    return{
        type: ActionTypes.REGISTER_SUCCES
    }
}

export const registerFailed = (errMess) => {
    return{
        type: ActionTypes.REGISTER_FAILED,
        payload: errMess
    }
}

export const login = (email, password)=>(dispatch)=>{
    dispatch(setLogginLoading());
    service.login(email, password)
        .then(result=>{
            dispatch(setLoggedIn(true));
        }, error => {
            dispatch(logginFailed(error.errMess));
        })
}

export const logOut = () =>(dispatch)=>{
    service.logout();
    dispatch(setLoggedIn(false));
}

export const regiter = (name, email, password) => (dispatch) =>{

    dispatch(setResgisterLoading());
    service.registrar(name, email, password)
        .then(result => {
            dispatch(setRegisterSucces())
            dispatch(setLoggedIn(true))
        }, error => {
            dispatch(registerFailed(error.errMess));
        })
}