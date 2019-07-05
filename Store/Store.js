import { createStore, combineReducers } from 'redux'
import { reducer as form} from 'redux-form'
const reducerPrueba = (state = [0], action) => {
  switch (action.type) {
    case "AUMENTAR_REDUCER_PRUEBA":
      return [...state, state[state.length-1]+1];

    default:
      return state;
  }
};

const reducers = combineReducers({
  reducerPrueba,
  form
})

// const store = createStore(reducer,state)
const store = createStore(reducers); 

export default store