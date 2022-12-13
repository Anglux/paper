import { post, get } from './api'

export const login = (params = {}) => {
  return get(`/user/menu/66`,params);
}