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

export const actionCleanPublishImage = (image) => ({
  type: CONSTANTS.CLEAN_PUBLISH_IMAGE,
});