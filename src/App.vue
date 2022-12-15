<template>
  <Headers @onLogin="onLogin"></Headers>
  <div class="homeBody">
    <div class="card">
      <div class="cardHeader">
        <span>使用须知</span>
      </div>
      <div class="cardBody">
        <p>声明：智能语义识别得出的结果，根据不同的（文科/理科）文章类型，得出效果不一致。如今没有万能的智能AI（AI语言技术没有达到100%要求水平），用户使用前有免费使用次数，充值使用后不接受任何退款和售后服务要求，本系统仅供协助您完成原创文章。</p>
      </div>
    </div>
    <div class="card">
      <div class="hederSelect">
        <strong>降重模式：</strong>
        <span :class="{'currentSelect':selectIndex == index}" v-for="(item,index) in selectArr" :key="index" @click="updateCurrent(index)">{{ item.title }}</span>
      </div>
      <div class="rowBox">
        <div class="row">
          <label for="">请输入需要降重的文字</label>
          <textarea maxlength="4000" v-model="count" placeholder=""></textarea>
          <span>{{ count.length }}/4000字</span>
        </div>
        <div class="row">
          <label for="">智能降重处理结果</label>
          <textarea placeholder=""></textarea>
        </div>
      </div>
      <div class="rowButton">
        <button @click="onReset">重置</button>
        <button @click="onLogin">一键智能降重</button>
      </div>
    </div>
    <div class="card">
      <div class="cardHeder">
        <span>使用方法</span>
      </div>
      <div class="cardBody">
          <p><strong>V1智能降重</strong></p>
          <p>优点：改写后文章此段落原创度75%左右，AI智能降重系统不会更改原文本意，内容通顺和连贯性较好，适合自己在做优化。</p>
          <p>缺点：降重力度相比以下的偏低，只适合对查重要求不高的用户使用。</p>
          <p><strong>V2超级降重</strong></p>
          <p>优点：降重力度中度，适合于知网、大雅、维普、PaperPass、格子达等所有市场查重系统，改写后文章原创度达到80%左右，内容通顺和连贯性适中。</p>
          <p>缺点：内容通顺和连贯性中度。</p>
          <p><strong>V3通顺降重</strong></p>
          <p>优点：降重力度高度，适合于知网、维普、PaperPass，改写后文章原创度直接达到85%原创，可一键通过任何查重要求，通顺和连贯性中度。</p>
          <p>缺点：内容通顺和连贯性中度。</p>
        </div>
    </div>
  </div>
  <Login v-if="isLogin" @isLoginFun="isLogin = false"></Login>
</template>

<script lang="ts">
import { login } from "../services/app";
import { defineComponent, reactive, ref, onMounted } from 'vue';
import Headers from './components/Headers.vue'
import Login from './components/Login.vue'
export default defineComponent({
  name: 'App',
  components:{
    Login,
    Headers,
  },
  setup(){
    const count = ref('')
    const selectArr = reactive([{
      title:'V1智能降重',
      id:1
    },{
      title:'V2超级降重',
      id:2
    },{
      title:'V3通顺降重',
      id:3
    },{
      title:'英文专用降重',
      id:4
    }])
    const isLogin = ref(false)
    const selectIndex = ref(0)
    // 方法
    const updateCount = () => {
      console.log(count.value.length);
    }

    const onReset = () => {
      count.value = ''
    }
    const updateCurrent = (e: any) => {
      selectIndex.value = e
    }

    onMounted(async()=>{
      // const res = await login()
      // console.log(res);
    })

    const onLogin = (()=>{
      isLogin.value = !isLogin.value
    })

    return{
      count,
      isLogin,
      selectArr,
      selectIndex,
      onReset,
      onLogin,
      updateCount,
      updateCurrent
    }
  }
});
</script>
<style lang="less">
  body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #f6f8fb;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 1.6;
    color: rgba(0,0,0,.85);
    font: 14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
  }
  p{
    margin: 0;
  }
  .homeBody{
    padding-top: 70px;
    min-width: 1000px;
    width: 1170px;
    margin: 0 auto;
    // background-color: #fff;
    .cardHeader{
      height: 42px;
      line-height: 42px;
      padding: 0 15px;
      border-bottom: 1px solid #f6f6f6;
      color: #333;
      border-radius: 2px 2px 0 0;
      font-size: 14px;
    }
    .hederSelect{
      height: 42px;
      line-height: 42px;
      padding: 0 15px;
      border-bottom: 1px solid #f6f6f6;
      color: #333;
      border-radius: 2px 2px 0 0;
      font-size: 14px;
      span{
        cursor: pointer;
        color: #333;
        border: 1px solid transparent;
        border-color: #d2d2d2;
        margin: 0 10px;
        padding: 5px 10px;
        box-sizing: border-box;
        border-radius: 4px;
        font-size: 12px;
      }
      .currentSelect{
        border-color: #1E9FFF;
        color: #1E9FFF;
      }
    }
    .cardBody{
      padding: 10px 15px;
      line-height: 24px;
      p{
        line-height: 24px;
      }
    }
    .rowButton{
      text-align: right;
      padding-right: 20px;
      padding-bottom: 20px;
      button{
        &:first-child{
          margin-right: 10px;
          background-color: #fff;
          color: #333;
          border: 1px solid transparent;
          border-color: #d2d2d2;
        }
        height: 38px;
        line-height: 38px;
        border: 1px solid transparent;
        padding: 0 18px;
        background-color: #1E9FFF;
        color: #fff;
        white-space: nowrap;
        text-align: center;
        font-size: 14px;
        border-radius: 2px;
        cursor: pointer;
      }
    }
    .card{
      margin-bottom: 15px;
      border-radius: 2px;
      background-color: #fff;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    }
    .rowBox{
      display: flex;
      padding: 20px 10px;
      box-sizing: border-box;
      justify-content: space-between;
      .row{
        flex:1;
        margin:0 10px;
        span{
          display: block;
          text-align: right;
          margin-top: 5px;
        }
        label{
          display: block;
          float: none;
          width: 100%;
          border-radius: 2px;
          box-sizing: border-box;
          text-align: left;
          background-color: #FBFBFB;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding: 8px 15px;
          height: 38px;
          line-height: 20px;
          border-width: 1px;
          border-style: solid;
          border-color: #eee;
          border-bottom: 0;
        }
        textarea{
          width: 100%;
          min-height: 260px;
          border-radius: 0 0 2px 2px;
          font-size: 14px;
          padding: 10px;
          overflow: auto;
          line-height: 1.8;
          text-align: justify;
          font-family: "Times New Roman", "Microsoft Yahei", Arial, sans-serif;
          resize: none;
          border-width: 1px;
          border-style: solid;
          background-color: #fff;
          border-color: #eee;
          letter-spacing: normal;
          word-spacing: normal;
          text-transform: none;
          text-indent: 0px;
          text-shadow: none;
          -webkit-writing-mode: horizontal-tb !important;
          text-rendering: auto;
          white-space: pre-wrap;
          overflow-wrap: break-word;
          column-count: initial !important;
          outline:none;
          box-sizing: border-box;
        }
      }
    }
  }
</style>