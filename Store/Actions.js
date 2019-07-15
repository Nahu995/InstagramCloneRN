import CONSTANTS from './Constants'

export const actionRegister = data => ({
  type: CONSTANTS.REGISTER,
  data
})

export const actionLogin = data => ({
  type: CONSTANTS.LOGIN,
  data
})