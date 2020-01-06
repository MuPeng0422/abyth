<template>
  <div class="main">
    <div class="peojectTitle">
      <index-title></index-title>
    </div>
    <el-row type="flex" class="content" justify="space-around">
      <el-col :span="5" class="left">
        <h3>{{ videotitle }}</h3>
        <video-list></video-list>
      </el-col>
      <el-col :span="14" class="center"></el-col>
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
      videotitle: '重要部位监控'
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
      width: 20%;
      height: 100%;
      padding: 2% 1%;
      border-radius: 5px;
      box-shadow: 0 0 5px #00c2ff;
      position: relative;

      h3 {
        font-size: 18px;
        font-weight: normal;
        color: #00c2ff;
        border-left: 4px solid #00c2ff;
        position: absolute;
        top: -12px;
        left: 15px;
        padding-left: 10px;
        z-index: 99;
        background: #000745;
      }
    }

    .center {
      height: 100%;
      border: 1px solid #fff;
      padding: 1%;
    }

    .right {
      height: 100%;
      border: 1px solid #fff;
    }
  }
}
</style>
