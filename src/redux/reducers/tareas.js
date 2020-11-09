import * as ActionTypes from '../actions/actionTypes';

export const Tareas = ( state = { isLoading: true, 
    errMess: null,
    editTarea: false,
    selectedTarea: {},
    tareas: [] }, action) => {
        switch (action.type) {
            case ActionTypes.ADD_TAREAS:
                return {...state, isLoading: false, errMess: null, tareas: action.payload};
            case ActionTypes.ADD_TAREA:
                var tarea = action.payload
                return {...state, isLoading: false, errMess: null, tareas: state.tareas.concat(tarea)};
            case ActionTypes.TAREA_LOADING:
                return {...state, isLoading: true, errMess: null, tareas: []};
            case ActionTypes.TAREA_FAILED:
                return {...state, isLoading: false, errMess: action.payload};
            case ActionTypes.TAREA_SELECTED:
                return {...state, isLoading: false, errMess: null, selectedtarea: action.payload };
            case ActionTypes.EDIT_TAREA:
                return {...state, isLoading: false, errMess: null, editTarea: action.payload};
            case ActionTypes.NEW_TAREA:
                return {...state, isLoading: false, errMess: null, selectedtarea: {}, edittarea: true};
            default:
                return state;
        }
    }