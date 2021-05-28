import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usuarioReducer from './usuarioDucks'


// Aquí incluimos todos los reducers que vamos a utilizar

const rootReducer = combineReducers({
    usuario: usuarioReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}