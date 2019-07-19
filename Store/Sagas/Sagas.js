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
  const type = `image/${uri.split('.').pop()}`
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

const loginFirebase = ({ email, password }) => 
  autentication.signInWithEmailAndPassword(email, password)
  .then( success => success.user.toJSON())

function* sagaLogin (values) {
  try {
    console.log(values)
    const response = yield call(loginFirebase,values.data)
    console.log("Response Refactor", response)
  } catch (error) {
    console.log(error)
  }
}

const writeInFirebase= ({ width, height, secure_url, uid }, text = "")  => 
  database.ref('publications/').push({
    width,
    height,
    secure_url,
    uid,
    text
  }).then(response =>  response)

const writeUserPublish = ({uid, key}) => 
  database
    .ref(`author-publications/${uid}`)
    .update({ [key]: true })
    .then(response => response)

function* sagaUploadPublish ({values}) {
  try {
    const image = yield select(state => state.reducerPublishImage);
    const resultImage = yield call(registerCloudinaryImage, image)
    const { width, height, secure_url} = resultImage;

    const user = yield select(state => state.reducerSession);
    const { uid } = user // = UserId

    const paramsImage = { width, height,secure_url, uid }

    const resultWriteInFirebase = yield call(writeInFirebase, paramsImage, values.text)
    const { key } = resultWriteInFirebase
    const paramsAuthorPublish = { uid, key };
    const resultWriteUserPublish = yield call (writeUserPublish, paramsAuthorPublish);


    console.log("resultWriteUserPublish",resultWriteUserPublish)
    console.log("user sagaUPPUB", user)
    console.log("resultImage sagaUPPUB", resultImage)
    console.log("image sagaUPPUB", image)
    console.log("values sagaUPPUB", values)
    console.log(resultWriteInFirebase.key," resultWriteInFirebase", resultWriteInFirebase)
  } catch (error) {
    console.log(error)
  }
}

const downloadPublications = () => 
  database
    .ref(`publications/`)
    .once('value')
    .then(response => response.val())

function* sagaDownloadPublications (){
  try {
    const publications = yield call(downloadPublications)
    console.log(publications)
  } catch (error) {
    console.log(error)
  }
}

export default function* primaryFunction () {
  // takeEvery listen all dispatchs
  yield takeEvery (CONSTANTS.REGISTER, sagaRegister)
  yield takeEvery (CONSTANTS.LOGIN, sagaLogin);
  yield takeEvery (CONSTANTS.UPLOAD_PUBLISH, sagaUploadPublish)
  yield takeEvery (CONSTANTS.DOWNLOAD_PUBLICATIONS, sagaDownloadPublications)
}