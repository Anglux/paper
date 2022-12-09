<template>
  <div>reactive的使用</div>
  <h3>姓名：{{user.name}}</h3>
  <h3>年龄：{{user.age}}</h3>
  <h3>媳妇：{{user.wife.name}}</h3>
  <hr>
  <button @click="updateUser">更换媳妇</button>
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