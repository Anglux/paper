import { post, get } from './api'

export const login = (params = {}) => {
  return get(`/user/info`,params);
}

export const signIn = (params = {}) => {
  return post(`/user/signIn`,params);
}

export const menu = (params = {}) => {
  return post(`/user/menu/66`,params);
}

