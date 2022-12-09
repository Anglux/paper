<template>
  <div class="homeBody">
    <div class="card">
      <div class="cardHeder">
        <span>降重模式</span>
      </div>
      <div class="rowBox">
        <div class="row">
          <label for="">请输入需要降重的文字</label>
          <textarea placeholder=""></textarea>
        </div>
        <div class="row">
          <label for="">智能降重处理结果</label>
          <textarea placeholder=""></textarea>
        </div>
      </div>
      <div class="rowButton">
        <button>重置</button>
        <button>一键智能降重</button>
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
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  // 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息数据
  /* 
  reactive: 
      作用: 定义多个数据的响应式
      const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
      响应式转换是“深层的”：会影响对象内部所有嵌套的属性
      内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
  */
  setup(){
    // 把数据变成响应式的数据
    const user = reactive({
      name:'小明',
      age:20,
      wife:{
        name:'小小',
        age:18,
        cars:['奔驰','法拉利']
      }
    })
    console.log('user :>> ', user);
    // 方法
    // function updateUser() {}
    const updateUser = () => {
      const nameArr = ['小张','小李','小朱','小乔','小小']
      const nameRomder = Math.floor(Math.random() * nameArr.length)
      user.wife.name = nameArr[nameRomder]
      // user.name = '小阳'
      // user.name += '=='
      // user.age += 2
      // user.wife.name += '++'
      // user.wife.cars[0] = 'VOLVO'
    }
    return{
      user,
      updateUser
    }
  }
});
</script>
<style lang="less">
  body{
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
    padding-top: 50px;
    min-width: 1000px;
    width: 1170px;
    margin: 0 auto;
    // background-color: #fff;
    .cardHeder{
      height: 42px;
      line-height: 42px;
      padding: 0 15px;
      border-bottom: 1px solid #f6f6f6;
      color: #333;
      border-radius: 2px 2px 0 0;
      font-size: 14px;
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
          border-color: #d2d2d2
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
          min-height: 100px;
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