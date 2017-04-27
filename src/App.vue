<template>
  <div id="app">
    <el-row></el-row>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import {Row, Col} from 'element-ui'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
