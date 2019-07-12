//commit repairSagas
import { takeEvery, call } from 'redux-saga/effects'
import { autentication, database } from '../Services/Firebase'

const firebaseRegistration =  (values) => 
  autentication
    .createUserWithEmailAndPassword(values.email, values.password)
      .then(success => success.user.toJSON())
      .catch(error => error);

const recordInDatabase = () => dataBase.ref('users/' + userId).set({
  username:name,
  email:email,
  profile_picture: imageUrl
})

function* generateRegister (values) {
  try {
    const register = yield call(firebaseRegistration, values.data)
    console.log("Sagas.js 19 Register\n" , register)
    console.log("Sagas.js 20 values\n" , values)
    const {data:{name}} = values
    console.log("nombre",name)
    //uid, email, name
    // yield call(recordInDatabase, )
  } catch (error) {
    console.log("Sagas.js 24 Error \n ", error);
  }
}

export default function* primaryFunction () {
   yield takeEvery ('USER_REGISTER', generateRegister)
  // takeEvery escucha todos los dispatch
  // yield ES6
  console.log("primaryFunction*")
}