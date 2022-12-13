// 导出常用函数
import { instance } from ".";

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
 export const post = (url: string, data = {}, params = {}) => {
  return instance({
    method: 'post',
    url,
    data,
    params,
  });
}

/**
 * @param {string} url
 * @param {object} params
 */
export const get = (url: string, params = {}) => {
  return instance({
    method: 'get',
    url,
    params,
  });
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const put = (url: string, data = {}, params = {}) => {
  return instance({
    method: 'put',
    url,
    params,
    data,
  });
}

/**
 * @param {string} url
 * @param {object} params
 */
export const _delete = (url: string, params = {}) => {
  return instance({
    method: 'delete',
    url,
    params,
  });
}