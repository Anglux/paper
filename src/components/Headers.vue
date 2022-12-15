<template>
  <div class="homeHeader">
    <div class="homeHeaderBox">
      <div></div>
      <div class="homeHeaderInfo">
        <div v-if="token">1</div>
        <div v-else class="homeHeaderBtn">
          <button @click="$emit('onLogin')">登录</button>
          <button>注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components:{
  },
  setup(){
    const token = localStorage.getItem("token");
    console.log('token :>> ', token);
    return{
      token
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
    }
  }
</style>