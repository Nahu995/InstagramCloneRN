import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form} from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import primaryFunction from './Sagas/Sagas';
import CONSTANTS from './Constants';

const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case "AUMENTAR_REDUCER_PRUEBA":
      return [...state, state[state.length-1]+1];

    default:
      return state;
  }
};

const reducerSession = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.SET_SESSION:
      return { ...action.user };
    case CONSTANTS.SIGN_OFF:
      return null;
    
    default:
      return state
  }
}

const reducerSignUpImage = (state = {image: null}, action) => {
  switch (action.type) {
    case CONSTANTS.UPLOAD_SIGNUP_IMAGE:
      return { image: action.image }    
    case CONSTANTS.CLEAN_SIGNUP_IMAGE:
      return { image: null }
  
    default:
      return state;
  }
}

// f (g (h (...args) ) )
// ultimoMiddleware(myMiddleware(...args))

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerPrueba,
  reducerSession,
  reducerSignUpImage,
  form,
})
// const store = createStore(reducer,state)
const store = createStore(reducers, applyMiddleware(sagaMiddleware)); 

sagaMiddleware.run(primaryFunction);

export default store;