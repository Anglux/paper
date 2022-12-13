import { post, get } from './api'

export const login = (params = {}) => {
  return get(`api/comment/1`,params);
}