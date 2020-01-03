<template>
  <div class="main">
    <div class="peoject">
      <project-title></project-title>
    </div>
  </div>
</template>
<script>
import ProjectTitle from '@/components/ProjectTitle.vue'

export default {
  name: "Project",
  data () {
    return {
    };
  },
  components: {
    ProjectTitle
  }
}
</script>
<style lang="stylus" scoped>
.main {
  height: 100%;

  .peoject {
    height: 10%;
  }
}
</style>