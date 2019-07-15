//commit repairSagas
import { takeEvery, call } from 'redux-saga/effects'
import { autentication, database } from '../Services/Firebase'
import CONSTANTS from '../Constants'

const firebaseRegistration =  (values) => 
  autentication
    .createUserWithEmailAndPassword(values.email, values.password)
      .then(success => success.user.toJSON())
      .catch(error => error);

const recordInDatabase = ({uid, email, name}) => database.ref(`users/${uid}`).set({
  name,
  email,
})

function* sagaRegister (values) {
  try {
    const register = yield call(firebaseRegistration, values.data)
    // uid, email, name
    const { email, uid } = register;
    const { data : {name} } = values;
    yield call(recordInDatabase, { uid, email, name} );
  } catch (error) {
    console.log("Sagas.js 26 Error \n ", error);
  }
}

const loginFirebase = ({ email, password }) => autentication.signInWithEmailAndPassword(email, password)
  .then(success => success.user.toJSON());


function* sagaLogin (values) {
  try {
    console.log("sagaLogin")
    console.log(values)
    const response = yield call(loginFirebase,values.data)
    console.log("Response Refactor", response)
  } catch (error) {
    console.log(error)
  }
}

export default function* primaryFunction () {
  yield takeEvery ( CONSTANTS.REGISTER, sagaRegister)
  yield takeEvery (CONSTANTS.LOGIN, sagaLogin)  
  // takeEvery escucha todos los dispatch
  // yield ES6
  console.log("primaryFunction*")
}