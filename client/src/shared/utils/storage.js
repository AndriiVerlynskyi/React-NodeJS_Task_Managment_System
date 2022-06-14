import { tokenKey, userIdKey } from '../consts';

export const getToken = () => {
  return localStorage.getItem(tokenKey)
}

export const addToken = (token) => {
  if ( !!token ) {
    localStorage.setItem(tokenKey, token)
  }
}

export const deleteToken = () => {
  localStorage.removeItem(tokenKey)
}

export const getUserId = () => {
  return localStorage.getItem(userIdKey)
}

export const addUserId = (userId) => {
  if ( !!userId ) {
    localStorage.setItem(userIdKey, userId)
  }
}

export const deleteUserId = () => {
  localStorage.removeItem(userIdKey)
}
