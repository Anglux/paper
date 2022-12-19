import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'userInfo',  // 命名，唯一
  state: () => {
    return {
      // isLoginShow:Boolean = false,
      userInfo: {
        token:''
      }
    }
  },
  actions: {
    setUserInfo(data:any) {
      // 可直接通过this访问state属性
      this.userInfo = data;
    },
    // setIsLoginShow(data: Boolean){
    //   this.isLoginShow = data
    // }
  }
})