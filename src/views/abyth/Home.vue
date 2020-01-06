<template>
  <div class="home">
    <el-container class="container">
      <el-header class="header_container">
        <head-top></head-top>
      </el-header>
      <el-main class="main_container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadTop from '@/components/HeadTop.vue'

export default {
  name: 'home',
  components: {
    HeadTop
  }
}
</script>

<style lang="stylus" scoped>
.home {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/img/bg.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .container {
    width: 100%;
    height: 100%;

    .header_container {
      width: 100%;
      height: 10% !important;
      background: #010853;
    }

    .main_container {
      width: 100%;
      height: 90%;
    }
  }
}
</style>
