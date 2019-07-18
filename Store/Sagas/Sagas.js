import { takeEvery, call, select } from 'redux-saga/effects'
import { autentication, database } from '../Services/Firebase'
import CONSTANTS from '../Constants'

const firebaseRegistration =  (values) => 
  autentication
    .createUserWithEmailAndPassword(values.email, values.password)
      .then(success => success.user.toJSON())
      .catch(error => error);

const recordInDatabase = ({uid, email, name, profileImage}) => database.ref(`users/${uid}`).set({
  name,
  email,
  profileImage
});

const registerCloudinaryImage = ({image}) => {
  const { uri } = image
  const name = uri.split('/').pop()
  // const name = [...uriSplit].pop()
  const type = `image/${uri.split('.').pop()}`
  // const type = `image/${[...typeSplit].pop()}`
  const photo = {
    uri,
    type,
    name
  }

  const formImage = new FormData();
  formImage.append('file', photo);
  formImage.append('upload_preset', CONSTANTS.CLOUDINARY_PRESET)

  return fetch(CONSTANTS.CLOUDINARY_NAME, {
    method: 'POST',
    body: formImage,
  }).then(res => res.json())

}

function* sagaRegister (values) {
  try {
    //upload Image
    const image = yield select(state => state.reducerSignUpImage)
    const urlImage = yield call(registerCloudinaryImage, image)
    console.log("RESPONSE with changes!!!!! \n", urlImage)
    const profileImage = urlImage.secure_url
    const register = yield call(firebaseRegistration, values.data)
    // uid, email, name, profileImage
    const { email, uid } = register;
    const { data : {name} } = values;
    yield call(recordInDatabase, { uid, email, name, profileImage } );
  } catch (error) {
    console.log("sagas Error \n", error);
  }
}

const loginFirebase = ({ email, password }) => autentication.signInWithEmailAndPassword(email, password)
  .then(success => success.user.toJSON());


function* sagaLogin (values) {
  try {
    console.log(values)
    const response = yield call(loginFirebase,values.data)
    console.log("Response Refactor", response)
  } catch (error) {
    console.log(error)
  }
}

export default function* primaryFunction () {
  // takeEvery escucha todos los dispatch
  yield takeEvery ( CONSTANTS.REGISTER, sagaRegister)
  yield takeEvery (CONSTANTS.LOGIN, sagaLogin)  
  // yield ES6
}