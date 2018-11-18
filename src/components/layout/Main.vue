<template>
  <el-main>
    <Breadcrumb></Breadcrumb>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </el-main>
</template>
<script>
import Breadcrumb from './Breadcrumb'
export default {
  components: {
    Breadcrumb
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.el-main
  background-color: #E9EEF3
  color: #333
  text-align: center
</style>
