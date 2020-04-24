import axios from "axios";
import * as Qs from "qs";


const instanceAPI = axios.create({
  baseURL: 'http://192.168.100.7:3001',
  headers: {
    "Content-Type": "application/json"
  },
  paramsSerializer: params => {
    return Qs.stringify(params, { arrayFormat: "repeat" });
  }
});

instanceAPI.interceptors.request.use(
  config => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      config.headers["x-access-token"] = token.accessToken;
    }
    return config;
  },
  error => Promise.reject(error)
);

instanceAPI.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { response } = error;
    return Promise.reject(response);
  }
);


export const fetch = async (
  endpoint,
  method = "GET",
  body,
  params = {},
  token
) => {
  try {
    return instanceAPI({
      method: method,
      url: endpoint,
      data: body,
      params: params,
      auth: token
    });
  } catch (error) {
    const { response } = error;
    console.log("Something went wrong!", response);
    return response;
  }
};
