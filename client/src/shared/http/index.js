import axios from 'axios';

axios.interceptors.request.use(
  config => {
    const authorization = JSON.parse(localStorage.getItem('authorization'));
    if (authorization) {
      config.headers.Authorization = authorization;
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
  postFormData(url, params) {
    return axios({
      method: 'post',
      url,
      data: params,
      headers: {'Content-Type': 'multipart/form-data' },
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
