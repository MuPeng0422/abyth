<template>
  <div class="platfrom">
    <div class="system">
      <div class="itemBtn"></div>
      <div class="ehcartLine">
        <ve-line
          id="IndexLine"
          width="100%"
          height="100%"
          :data="chartData"
          :extend="extend"
          :legend-visible="false"
          :title="chartTitle"
        ></ve-line>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IndexPlatFrom",
  data () {
    return {
      extend: {
        'xAxis.0.axisLabel.rotate': 45,
        'series.0.smooth': false
      },
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      chartTitle: {
        text: '人流量统计'
      }
    };
  }
}
</script>
<style lang="stylus" scoped>
.platfrom {
  width: 100%;
  height: 100%;
  padding: 0 2%;
  box-sizing: border-box;

  .system {
    height: 100%;

    .itemBtn {
      height: 30%;
    }

    .ehcartLine {
      height: 70%;
    }
  }
}
</style>