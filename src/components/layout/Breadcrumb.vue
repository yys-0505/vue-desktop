<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(route, index) in routeArr"
      :key="index"
      :to="{path: route.path}"
    >
      {{route.meta.breadcrumbName}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  data () {
    return {
      routeArr: []
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      this.routeArr = this.$route.matched
    }
  },
  watch: {
    '$route' (to, from) {
      this.getBreadcrumb()
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
