<template>
  <div class="main">
    <div class="peojectTitle">
      <index-title></index-title>
    </div>
    <el-row type="flex" class="content" justify="space-around">
      <el-col :span="5" class="left">
        <video-list></video-list>
      </el-col>
      <el-col :span="14" class="center">
        
      </el-col>
      <el-col :span="5" class="right"></el-col>
    </el-row>
  </div>
</template>
<script>
import IndexTitle from '@/views/abyth/IndexTitle.vue'
import VideoList from '@/views/abyth/IndexVideo.vue'

export default {
  name: "Project",
  data () {
    return {
    };
  },
  components: {
    IndexTitle,
    VideoList
  }
}
</script>
<style lang="stylus" scoped>
.main {
  height: 100%;

  .peojectTitle {
    height: 10%;
  }

  .content {
    height: 90%;
    padding-top: 1%;

    .left {
      height: 100%;
      border 1px solid #fff
    }

    .center {
      height: 100%;
      border 1px solid #fff
      padding 1%
    }

    .right {
      height: 100%;
      border 1px solid #fff
    }
  }
}
</style>
