<template>
  <div class="map">
    <el-amap vid="amapDemo" :center="center" :zoom="zoom" class="amap">
      <el-amap-marker v-for="(marker, i) in markers" :position="marker" :key="i"></el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
export default {
  name: "amap",
  data () {
    return {
      zoom: 12,
      markers: [
        [108.953472, 34.265691]
      ],
      center: [108.953472, 34.265691],
    };
  }
}
</script>
<style lang="stylus" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>