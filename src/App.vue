<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue';
function randomNum(minNum: number, maxNum: number) {
  switch (arguments.length) {
    case 1:
      return parseInt((Math.random() * minNum + 1).toString(), 10);
      break;
    case 2:
      return parseInt((Math.random() * (maxNum - minNum + 1) + minNum).toString(), 10);
      break;
    default:
      return 0;
      break;
  }
}
const sentences = [
  "起来了啊！",
  "好班的孩子！",
  "好嘞~"
]
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!--<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />-->

  <h1>1901资料站</h1>
  <p>{{ sentences[randomNum(0, sentences.length - 1)] }}</p>
  <Footer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
