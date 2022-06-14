import { initReactQueryAuth } from 'react-query-auth';
import { isEmpty } from 'lodash';
import {
  signInUser,
  signUpSendLetter,
  getUserData
} from 'shared/api/auth';
import {
  getToken,
  addToken,
  deleteToken,
  getUserId,
  addUserId,
  deleteUserId
} from 'shared/utils/storage';

const logOut = () => {
  deleteToken();
  deleteUserId();
}

const signIn = async (inputData) => {
  const response = await signInUser(inputData);
  addToken(response.data.token)
  addUserId(response.data.user._id)
  const user = response.data.user;
  return user;
}

const signUp = async (data) => {
  await signUpSendLetter(data)
  return null
}

const loadUser = async () => {
  const token = getToken();
  if (!isEmpty(token)) {
    const userId = getUserId();
    try {
      return await getUserData(userId);
    } catch (err){
      deleteToken();
      deleteUserId();
      return
    }  
  } else {
    return;
  }
}

const authConfig = {
  loadUser,
  loginFn: signIn,
  registerFn: signUp,
  logoutFn: logOut
}

const { AuthProvider, useAuth } = initReactQueryAuth(authConfig);

export { AuthProvider, useAuth };
