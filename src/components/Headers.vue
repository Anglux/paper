<template>
  <div class="homeHeader">
    <div class="homeHeaderBox">
      <div></div>
      <div class="homeHeaderInfo">
        <div v-if="store.userInfo?.token" class="userInfo">
          <span>你好{{ store.userInfo?.userName }}</span>
          <span @click="onQuit">退出</span>
        </div>
        <div v-else class="homeHeaderBtn">
          <button @click="$emit('onLogin')">登录</button>
          <button>注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { userStore } from "../store/app";
export default defineComponent({
  name: 'App',
  components:{},
  setup(){
    const store = userStore();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    onMounted(()=>{
      store.$patch({
        userInfo:userInfo
      })
    })
    const onQuit = () => {
      localStorage.removeItem('userInfo')
      store.$reset()
    }        
    return{
      store,
      onQuit
    }
  }
})
</script>
<style lang="less">
  .homeHeader{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    border-bottom: 1px solid #eaecef;
    box-sizing: border-box;
    .homeHeaderBox{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      max-width: 1170px;
      min-height: 60px;
      // padding: 0 30px;
      // box-sizing: border-box;
    }
    .homeHeaderInfo{
      .homeHeaderBtn{
        button{
          border: 1px solid transparent;
          padding: 0 18px;
          color: #000;
          background-color: transparent;
          font-size: 15px;
          line-height:60px;
        }
      }
      .userInfo{
        span{
          cursor: pointer;
          &:first-child{
            color: #1E9FFF;
          }
          margin-right: 20px;
        }
      }
    }
  }
</style>