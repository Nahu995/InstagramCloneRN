import CONSTANTS from './Constants'

export const actionRegister = data => ({
  type: CONSTANTS.REGISTER,
  data
})

export const actionLogin = data => ({
  type: CONSTANTS.LOGIN,
  data
})

export const actionSetSession = user => ({
  type: CONSTANTS.SET_SESSION,
  user
})

export const actionSignOff = () => ({
  type: CONSTANTS.SIGN_OFF
});

export const actionUploadSignUpImage = (image) => ({
  type: CONSTANTS.UPLOAD_SIGNUP_IMAGE,
  image
});

export const actionCleanSignUpImage = () => ({
  type: CONSTANTS.CLEAN_SIGNUP_IMAGE,
});

export const actionUploadPublishImage = (image) => ({
  type: CONSTANTS.UPLOAD_PUBLISH_IMAGE,
  image
});

export const actionCleanPublishImage = () => ({
  type: CONSTANTS.CLEAN_PUBLISH_IMAGE,
});

export const actionUploadPublish = (values) => ({
  type: CONSTANTS.UPLOAD_PUBLISH,
  values
});

export const actionDownloadPublications = () => ({
  type: CONSTANTS.DOWNLOAD_PUBLICATIONS,
  
})

export const actionAddPublicationsStore = publications => ({
  type: CONSTANTS.ADD_PUBLICATIONS_STORE,
  publications
})

export const actionAddAuthorsStore = authors => ({
  type: CONSTANTS.ADD_AUTHORS_STORE,
  authors
})

export const actionSuccessUploadPublish = () => ({
  type: CONSTANTS.SUCCESS_UPLOAD_PUBLISH
})

export const actionErrorUploadPublish = () => ({
  type: CONSTANTS.ERROR_UPLOAD_PUBLISH
})

export const actionCleanUploadPublish = () => ({
  type: CONSTANTS.CLEAN_UPLOAD_PUBLISH
})
