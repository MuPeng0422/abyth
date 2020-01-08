<template>
  <el-tabs type="border-card">
    <el-tab-pane label="地图">
      <el-amap vid="amapDemo" :center="center" :zoom="zoom" class="amap">
        <el-amap-marker v-for="(marker, i) in markers" :position="marker" :key="i"></el-amap-marker>
      </el-amap>
    </el-tab-pane>
    <el-tab-pane label="风险评估">
      <iframe :src="fxpgUrl" frameborder="0" style="width: 100%; height: 100%"></iframe>
    </el-tab-pane>
    <el-tab-pane label="3D展示">
      <iframe :src="threeDUrl" frameborder="0" style="width: 100%; height: 100%"></iframe>
    </el-tab-pane>
    <el-tab-pane label="VR展示">
      <iframe :src="vrUrl" frameborder="0" style="width: 100%; height: 100%"></iframe>
    </el-tab-pane>
    <el-tab-pane label="平台">
      <div class="system">
        <div class="itemBtn"></div>
        <div class="ehcartLine">
          <v-chart :options="polar" />
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'

export default {
  name: "tab",
  components: {
    'v-chart': ECharts
  },
  data () {
    let data = []

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }
    return {
      zoom: 12,
      fxpgUrl: 'pdf/abyth/20191106/B73EED7476B541CA8467C3FE1C108C83.pdf',
      threeDUrl: 'http://117.34.118.124:8181/LSGlobe/scene.html?guid=126b1bfb-091c-46fa-a83f-63c4d52edae4&IS_PACKAGE=1',
      vrUrl: 'http://116.62.62.232/show/SIYUAN/index.html',
      markers: [
        [108.953472, 34.265691]
      ],
      center: [108.953472, 34.265691],
      polar: {
        title: {
          text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      }
    }
  },
  methods: {

  }
}
</script>
<style lang="stylus">
.el-tabs {
  width: 100%;
  height: 100%;

  .el-tabs__content {
    height: calc(100% - 40px);
    padding: 0;

    .el-tab-pane {
      height: 100%;

      .system {
        height: 100%;

        .itemBtn {
          height: 30%;
        }

        .ehcartLine {
          height: 70%;

          .echarts {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .search-box {
    position: absolute;
    top: 25px;
    left: 20px;
  }

  .amap {
    height: 100%;
  }
}
</style>