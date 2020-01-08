<template>
  <el-tabs type="border-card">
    <el-tab-pane label="地图">
      <index-amap></index-amap>
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
    <el-tab-pane label="平台" :lazy="true">
      <IndexPlatFrom></IndexPlatFrom>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import IndexAmap from '@/views/abyth/IndexAmap.vue'
import IndexPlatFrom from '@/views/abyth/IndexPlatFrom.vue'

export default {
  name: "tab",
  components: {
    IndexAmap,
    IndexPlatFrom
  },
  data () {
    return {
      
      fxpgUrl: 'pdf/abyth/20191106/B73EED7476B541CA8467C3FE1C108C83.pdf',
      threeDUrl: 'http://117.34.118.124:8181/LSGlobe/scene.html?guid=126b1bfb-091c-46fa-a83f-63c4d52edae4&IS_PACKAGE=1',
      vrUrl: 'http://116.62.62.232/show/SIYUAN/index.html'
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
    }
  }
}
</style>