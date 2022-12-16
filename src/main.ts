// 程序的主入口文件 .ts 文件
// 引入createApp函数，创建对应的应用，产生应用的实例对象
import { createApp } from 'vue'
import store from '../src/store'

// 所有组件的父级组件
import App from './App.vue'

// 创建app应用返回对应的实例对象 ，调用mount 方法进行挂载

createApp(App).use(store).mount('#app')