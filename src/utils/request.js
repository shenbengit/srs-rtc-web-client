"use strict";
import axios from "axios";
import qs from 'qs';
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";
let config = {
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 10 * 1000, // Timeout
    withCredentials: true // Check cross-site Access-Control
};
// create an axios instance
const service = axios.create(config);
// request interceptor
// request interceptor
service.interceptors.request.use(
    config => {
        if (config.method === 'get') { // get请求直接放过
            return config;
        }
        if (config.method === 'post' && config.qsFlag) { // post请求判断是否加了数据处理标志
            // POST传参序列化(添加请求拦截器)
            config.data = qs.stringify(config.data);
        }
        return config
    },
    error => {
        // do something with request error
        return Promise.reject(error)
    }
)
// response interceptor
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);


export default service;
