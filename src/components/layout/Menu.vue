<template>
  <el-menu
    class="el-menu-vertical"
    :collapse="isCollapse"
    :router="true"
    :default-active="$route.path"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :unique-opened="true"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="/opt1">选项1</el-menu-item>
        <el-menu-item index="/opt2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="/opt3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="/opt41">选项1</el-menu-item>
      </el-submenu>
      <el-menu-item-group>
        <el-menu-item index="/opt5">选项5</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
      </template>
      <el-menu-item-group>
          <el-menu-item index="/opt21">选项2-1</el-menu-item>
          <el-menu-item index="/opt22">选项2-2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  computed: {
    isCollapse () {
      return this.$store.state.user.isCollapse
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
