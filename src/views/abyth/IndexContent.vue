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
      <el-col :span="14" class="center">
        <div class="tab_pannel">
          <index-tab></index-tab>
        </div>
        <div class="personnel_sign">
          <h3>{{ signtitle }}</h3>
          <personnel-sign></personnel-sign>
        </div>
      </el-col>
      <el-col :span="5" class="right"></el-col>
    </el-row>
  </div>
</template>
<script>
import IndexTitle from '@/views/abyth/IndexTitle.vue'
import VideoList from '@/views/abyth/IndexVideo.vue'
import IndexTab from '@/views/abyth/IndexTab.vue'
import PersonnelSign from '@/views/abyth/PersonnelSign.vue'

export default {
  name: "Project",
  data () {
    return {
      videotitle: '重要部位监控',
      signtitle: '今日出勤记录'
    };
  },
  components: {
    IndexTitle,
    VideoList,
    IndexTab,
    PersonnelSign
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
      padding: 0 10px;

      .tab_pannel {
        width: 100%;
        height: 70%;
        padding-bottom: 3%;
        box-sizing: border-box;
      }

      .personnel_sign {
        width: 100%;
        height: 30%;
        padding: 2%;
        border-radius: 5px;
        box-shadow: 0 0 5px #00c2ff;
        position: relative;
        box-sizing: border-box;

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
    }

    .right {
      height: 100%;
      border: 1px solid #fff;
    }
  }
}
</style>
