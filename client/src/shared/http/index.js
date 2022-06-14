import axios from 'axios';
import { getToken } from 'shared/utils/storage';

axios.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

const http = {
  get(url, params) {
    return axios({
      method: 'get',
      url,
      params,
    });
  },
  post(url, params) {
    return axios({
      method: 'post',
      url,
      data: params,
    });
  },
  delete(url, params) {
    return axios({
      method: 'delete',
      url,
      data: params,
    });
  },
  put(url, params) {
    return axios({
      method: 'put',
      url,
      data: params,
    });
  }
};

export default http;
