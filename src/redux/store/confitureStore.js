import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import auth from '../reducers/auth';
import tareas from '../reducers/tareas';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth,
            tareas
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
