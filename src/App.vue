<template>
  <div id="app">
    <framework-header></framework-header>
  
    <div style="padding-top:51px" class="container-fluid">
      <router-view></router-view>
    </div>
  
    <framework-footer></framework-footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    'framework-header': Header,
    'framework-footer': Footer
  },
  data: function () {
    return {
      '': ''
    }
  }
}
</script>

<style>
.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
