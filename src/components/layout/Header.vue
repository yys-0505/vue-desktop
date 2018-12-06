<template>
  <el-header>
    <i class="el-icon-menu" @click="toggleCollapse"></i>
    <h1 class="title">管理系统</h1>
  </el-header>
</template>
<script>
export default {
  methods: {
    toggleCollapse () {
      this.$store.commit('setCollapse')
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.el-header
  background: #3a6785;
  color: #fff;
  text-align: left
  line-height: 70px
  font-size: 22px
  flex: 0 0 70px
  .el-icon-menu
    float: left
    line-height: 70px
    cursor: pointer
  .title
    float: left
    padding-left: 20px
</style>
