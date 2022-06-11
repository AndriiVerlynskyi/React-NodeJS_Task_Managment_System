import { tokenKey } from '../consts';

export const addToken = (token) => {
  localStorage.setItem(tokenKey, token)
}

export const deleteToken = (token) => {
  localStorage.removeItem(tokenKey)
}