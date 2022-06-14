import http from 'shared/http';

const authURL = '/api/auth';

export const signInUser = data => {
  return http.post(`${authURL}/signin`, data)
}

export const signUpSendLetter = data => {
  return http.post(`${authURL}/signup/sendLetter`, data)
}

export const signUpConfirmEmail = data => {
  return http.post(`${authURL}/signup/confirmemail`, data)
}

export const getUserData = (userId) => {
  return http.get(`${authURL}/${userId}`)
}
