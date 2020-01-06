<template>
  <el-row type="flex" class="projectTitle" justify="space-between" align="middle">
    <el-col :span="5" class="total">
      <div class="item">
        <cite>{{ personnel.title }}</cite>
        <p>
          <span>{{ personnel.num }}</span>
          {{ personnel.company }}
        </p>
      </div>
      <div class="item">
        <cite>{{ monitor.title }}</cite>
        <p>
          <span>{{ monitor.num }}</span>
          {{ monitor.company }}
        </p>
      </div>
    </el-col>
    <el-col :span="14" class="centerTitle">
      <div class="title">{{ title }}</div>
    </el-col>
    <el-col :span="5" class="total">
      <div class="item">
        <cite>{{ equipment.title }}</cite>
        <p>
          <span>{{ equipment.num }}</span>
          {{ equipment.company }}
        </p>
      </div>
      <div class="item">
        <cite>{{ alarm.title }}</cite>
        <p>
          <span>{{ alarm.num }}</span>
          {{ alarm.company }}
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
      title: "第四医院指挥调度中心",
      personnel: {
        title: "人员",
        num: 1,
        company: "人"
      },
      monitor: {
        title: "监控",
        num: 1,
        company: "台"
      },
      equipment: {
        title: "设备",
        num: 1,
        company: "部"
      },
      alarm: {
        title: "报警",
        num: 1,
        company: "次"
      }
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

      &:nth-child(2) {
        color: #f4cf20;
      }
    }
  }

  .centerTitle {
    height: 100%;
    display: flex;
    align-items: center;
    background-image: url('~@/assets/img/projectTitle.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .title {
      width: 100%;
      text-align: center;
      font-size: 30px;
      font-weight: bolder;
      color: #fff;
    }
  }
}
</style>