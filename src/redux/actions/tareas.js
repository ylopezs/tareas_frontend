import * as ActionTypes from './ActionTypes';
import * as service from '../../api/tareasService';
import { tarea } from '../../api/ConstApi';

export const addTareas = (tareas) =>{
    return{
        type: ActionTypes.ADD_TAREAS,
        payload:  tareas
    }

}

export const addTarea = (tarea) => {
    return{
        type: ActionTypes.ADD_TAREA,
        payload: tarea
    }

}

export const tareaLoading = () => {
    return{
        type: ActionTypes.TAREA_LOADING
    }

}

export const tareaFailed = (errmess) => {
    return{
        type: ActionTypes.TAREA_FAILED,
        payload: errmess
    }

}

export const selectTarea= (tarea) => {
    return{
        type: ActionTypes.TAREA_SELECTED,
        payload: tarea
    }

}

export const newTarea = () => {
    return{
        type: ActionTypes.NEW_TAREA
    }

}

export const eliminarTarea = (id) => (dispatch)=> {
    dispatch(tareaLoading());
    service.tareas(id)
        .then(result=>{
            dispatch(cargarTareas());
        }, error =>{
            dispatch(tareaFailed(error.errMess));
        })
}

export const cargarTareas = () => (dispatch) => {
    dispatch(tareaLoading());
    service.tareas()
        .then(result =>{
            dispatch(addTareas(result));
        }, error => {
            dispatch(tareaFailed(error.errMess));
        })
}

export const nuevaTarea = (tarea) => (dispatch) => {
    dispatch(tareaLoading());
    service.agregarTarea(tarea)
        .then(resutl =>{
            dispatch(addTarea(resutl));
        }, error =>{
            dispatch(tareaFailed(error.errMess));
        });
}

export const editarTarea = (tarea) => (dispatch) => {
    dispatch(tareaLoading());
    service.editarTarea(tarea)
        .then(result =>{
            dispatch(cargarTareas());
        }, error =>{
            dispatch(tareaFailed(error.errMess));
        })
}
