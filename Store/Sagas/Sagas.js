import { takeEvery, call } from 'redux-saga/effects'
import { autentication } from '../Services/Firebase'
const firebaseRegistration =  (values) => (
  autentication
  .createUserWithEmailAndPassword(values.email, values.password)
    .then((success) => {
      console.log("success \n", success)
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    })
);


function* generateRegister (values) {
  yield call( firebaseRegistration, values.data)
  console.log("generateRegister \n",values,"\n generateRegister ")
}

export default function* functionPrimaria () {
  // takeEvery escucha todos los dispatch
  yield takeEvery ('USER_REGISTER', generateRegister)
  // yield ES6
  console.log("fnGeneradora")

}