import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'userInfo',  // 命名，唯一
  state: () => {
    return {
      count:0,
      userInfo: {}
    }
  },
  actions: {
      setUserInfo(data:any) {
          // 可直接通过this访问state属性
          this.userInfo = data;
      },
  }
})