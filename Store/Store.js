import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form} from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import functionPrimaria from './Sagas/Sagas';

const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case "AUMENTAR_REDUCER_PRUEBA":
      return [...state, state[state.length-1]+1];

    default:
      return state;
  }
};

// f (g (h (...args) ) )
// ultimoMiddleware(myMiddleware(...args))

const reducers = combineReducers({
  reducerPrueba,
  form
})

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer,state)
const store = createStore(reducers, applyMiddleware(sagaMiddleware)); 

sagaMiddleware.run(functionPrimaria);
export default store