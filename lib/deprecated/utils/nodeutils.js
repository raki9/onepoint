const crypto = require('crypto');
const path = require('path');
const cookie = require('cookie');
const url = require('url');
const querystring = require("querystring");
function getmd5(data) {
  if (!data) return data;
  const hash = crypto.createHash('md5');
  hash.update(data);
  return hash.digest('hex');
}
exports.cookie = cookie;
exports.url = url;
exports.querystring = querystring;
exports.getmd5 = getmd5;
exports.getmime=(e)=>{return require('../../utils/node').mime[e]};
const axios = require('axios');
const service = axios.create({
  timeout: 10000,
});
service.interceptors.request.use(
  (config) => {
    config.url = encodeURI(config.url);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

exports.axios = service;
