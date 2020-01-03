<template>
  <el-row type="flex" class="projectTitle" justify="space-between" align="middle">
    <el-col :span="6" class="total">
      <div class="item">
        <cite>出警</cite>
        <p>
          <span>0</span>家
        </p>
      </div>
      <div class="item">
        <cite>出警</cite>
        <p>
          <span>0</span>家
        </p>
      </div>
    </el-col>
    <el-col :span="12" class="centerTitle">
      <div class="title">第四医院项目</div>
    </el-col>
    <el-col :span="6" class="total">
      <div class="item">
        <cite>出警</cite>
        <p>
          <span>0</span>家
        </p>
      </div>
      <div class="item">
        <cite>出警</cite>
        <p>
          <span>0</span>家
        </p>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "ProjectTitle",
  data () {
    return {
    };
  }
}
</script>
<style lang="stylus" scoped>
.projectTitle {
  width: 100%;
  height: 100%;

  .total {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .item {
      cite {
        font-size: 14px;
        font-style: normal;
        color: $color;
      }

      p {
        font-size: 14px;

        span {
          font-size: 28px;
        }
      }

      &:nth-child(1) {
        color: #ee4a48;
      }
    }
  }

  .centerTitle {
    height: 100%;
    display: flex;
    align-items: center;
    background-image: url('~@/assets/img/projectTitle.png');
    background-repeat: no-repeat;
    background-size: 100%;

    .title {
      width: 100%;
      text-align: center;
    }
  }
}
</style>