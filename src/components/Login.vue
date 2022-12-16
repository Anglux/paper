<template>
  <div class="login">
    <div class="loginPopup" @click="$emit('isLoginFun')"></div>
    <div class="loginBox">
      <div v-if="isShow" class="loginInfo">
        <input type="text" v-model="loginParams.tel" placeholder="请输入手机号">
        <input type="password" v-model="loginParams.password" placeholder="请输入密码">
        <button @click="onLoginNext">立即登录</button>
        <span @click="updateIsInfo">没有账号，立即注册></span>
      </div>
      <div v-else class="loginReg">
        <div class="loginRegTel">
          <input class="inputClass" v-model="regParams.tel" maxlength="11" type="text" placeholder="请输入手机号">
          <!-- <span>点击获取验证码</span> -->
        </div>
        <!-- <p><input v-model="regParams.tel" type="text" placeholder="请输入验证码"></p> -->
        <p><input class="inputClass" v-model="regParams.userName" type="text" placeholder="请输入姓名"></p>
        <p><input class="inputClass" v-model="regParams.password" type="text" placeholder="请输入密码 字母+数字+特殊符号 8-30位"></p>
        <p><input class="inputClass" v-model="regParams.repetitionPassword" type="text" placeholder="请再次输入密码 字母+数字+特殊符号 8-30位"></p>
        <p class="isSex">
          <input type="radio" id="one" :value="1" v-model="regParams.sex" />
          <label for="one">男</label>
          <input type="radio" id="two" :value="0" v-model="regParams.sex" />
          <label for="two">女</label>
        </p>
        <button @click="onRegInfo">注册及登录</button>
        <div class="loginRegNext">已有账号？<span @click="updateIsInfo">立即登陆</span></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { userStore } from "../store/app";
import { ref, reactive, defineEmits } from 'vue';
import { signIn, login } from '../../services/app'
const store = userStore();
const emits = defineEmits(['isLoginFun'])
const isShow = ref(true);
const regParams = reactive({
  password:'',
  repetitionPassword:'',
  userName:'',
  tel:'',
  sex:0
})
const loginParams = reactive({
  tel:'17601257051',
  password:'www123456.',
})
const updateIsInfo = () => {
  Object.keys(regParams).map(key => {
    if (key == 'sex'){
      regParams[key] = 1
    }else{
      regParams[key] = ''
    }
  })
  isShow.value = !isShow.value
}
const onRegInfo = async () => {
  // if (regParams.tel == ''){
  //   return alert()
  // }
  console.log('regParams :>> ', regParams);
  const res = await signIn(regParams)
  if (res.code == 200){
    console.log('1 :>> ', 1);
  }else{
    console.log('res :>> ', res.data.message);
  }
}

const onLoginNext = async () => {
  const res = await login(loginParams)
  if (res.data.code == 200){
    localStorage.setItem('userInfo',JSON.stringify(res?.data?.data))
    store.$patch({
      userInfo:res?.data?.data
    })
    emits('isLoginFun')
  }
}
</script>
<style lang="less">
  .login{
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.4);
    justify-content: center;
    align-items: center;
    display: flex;
    top: 0;
    .loginPopup{
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,.4);
    }
    .loginBox{
      padding: 40px 0;
      background-color: #fff;
      width: 400px;
      max-height: 600px;
      border-radius: 6px;
      box-sizing: border-box;
      z-index: 9;
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
        .inputClass{
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
        .isSex{
          line-height: 30px;
          label{
            padding-left: 10px;
            margin-right: 10px;
          }
        }
      }
    }
  }
</style>