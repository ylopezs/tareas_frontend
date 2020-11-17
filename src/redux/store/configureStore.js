import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from '../reducers/auth';
import { Tareas } from '../reducers/tareas';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            tareas: Tareas
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
