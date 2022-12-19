import { post, get } from './api'

export const login = (params = {}) => {
  return post(`/user/login`,params);
}

export const signIn = (params = {}) => {
  return post(`/user/signIn`,params);
}

export const commonCode = (name:string) => {
  return get(`/public/common/enum/dict/${name}`);
}

