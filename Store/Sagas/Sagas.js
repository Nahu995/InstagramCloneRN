//commit repairSagas
import { takeEvery, call } from 'redux-saga/effects'
import { autentication } from '../Services/Firebase'
const firebaseRegistration =  (values) => (
  autentication
  .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => success)
    .catch(error => error)
);


function* generateRegister (values) {
  try{
    const register = yield call( firebaseRegistration, values.data)
    console.log("REGISTER =>" , register)
  }catch(error){
    console.log(error)
  }
}

export default function* functionPrimaria () {
  // takeEvery escucha todos los dispatch
  yield takeEvery ('USER_REGISTER', generateRegister)
  // yield ES6
  console.log("fnGeneradora")

}