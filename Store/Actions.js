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
})