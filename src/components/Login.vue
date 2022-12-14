<template>
  <div class="login">
    <div class="loginBox">
      <div v-if="isShow" class="loginInfo">
        <input type="text" placeholder="请输入手机号">
        <input type="text" placeholder="请输入密码">
        <button>立即登录</button>
        <span>没有账号，立即注册></span>
      </div>
      <div v-else class="loginReg">
        <div class="loginRegTel">
          <input type="text" placeholder="请输入手机号">
          <span>点击获取验证码</span>
        </div>
        <p><input type="text" placeholder="请输入验证码"></p>
        <p><input type="text" placeholder="请输入密码"></p>
        <button>注册及登录</button>
        <div class="loginRegNext">已有账号？<span>立即登陆</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup(){
    const isShow = ref(true)
    return {
      isShow
    }
  }
})
</script>
<style lang="less">
  .login{
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.4);
    z-index: 9;
    justify-content: center;
    align-items: center;
    display: flex;
    .loginBox{
      padding: 40px 0;
      background-color: #fff;
      width: 400px;
      max-height: 600px;
      border-radius: 6px;
      box-sizing: border-box;
      .loginInfo{
        padding: 0 40px;
        box-sizing: border-box;
        input{
          outline: none;
          appearance: none;
          -webkit-tap-highlight-color: transparent;
          display: inline-flex;
          box-sizing: border-box;
          padding-left: 20px;
          padding-right: 20px;
          width: 100%;
          transition: color 0.1s linear, border-color 0.1s linear, background-color 0.1s linear;
          color: #333;
          border-radius: 4px;
          border: solid #dcdfe6;
          border-width: 1px;
          height: 38px;
          font-size: 14px;
          align-items: center;
          margin-bottom: 20px;
        }
        button{
          width: 100%;
          background-color: #409EFF;
          border: 0;
          color: #fff;
          line-height: 38px;
          font-size: 15px;
          border-radius: 4px;
        }
        span{
          color: #409EFF;
          text-align: center;
          font-size: 13px;
          margin-top: 20px;
          display: block;
          cursor: pointer;
        }
      }
      .loginReg{
        padding: 0 40px;
        .loginRegTel{
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          span{
            display: block;
            width: 100px;
            margin-left: 10px;
            color: #409EFF;
          }
          input{
            flex: 1;
          }
        }
        p{
          margin-bottom: 20px;
        }
        input{
          outline: none;
          appearance: none;
          -webkit-tap-highlight-color: transparent;
          display: inline-flex;
          box-sizing: border-box;
          padding-left: 20px;
          padding-right: 20px;
          width: 100%;
          transition: color 0.1s linear, border-color 0.1s linear, background-color 0.1s linear;
          color: #333;
          border-radius: 4px;
          border: solid #dcdfe6;
          border-width: 1px;
          height: 38px;
          font-size: 14px;
          align-items: center;
        }
        button{
          width: 100%;
          background-color: #409EFF;
          border: 0;
          color: #fff;
          line-height: 38px;
          font-size: 15px;
          border-radius: 4px;
        }
        .loginRegNext{
          margin-top: 20px;
          span{
            color: #409EFF;
          }
        }
      }
    }
  }
</style>