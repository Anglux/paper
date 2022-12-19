import axios, { AxiosResponse } from "axios";

// 创建实例
const instance = axios.create({
  // baseURL: "http://wpx.51alf.cn/api/",
  // baseURL: "http://127.0.0.1:8080/api/",
  baseURL: "/apis",
  timeout: 8000
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem("token");
    if (token){
      config.headers!["authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export { instance };

