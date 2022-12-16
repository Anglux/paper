import { post, get } from './api'

export const login = (params = {}) => {
  return post(`/user/login`,params);
}

export const signIn = (params = {}) => {
  return post(`/user/signIn`,params);
}

export const menu = (params = {}) => {
  return post(`/user/menu/66`,params);
}

