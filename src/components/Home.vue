<template>
  <div class="home">
    <el-container direction="vertical">
      <Header></Header>
      <el-container>
        <Menu></Menu>
        <Main></Main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from './layout/Header'
import Menu from './layout/Menu'
import Main from './layout/Main'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    Menu,
    Main
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/stylus" lang="stylus">
.home
  height: 100%
  &>.el-container
    display: flex
    height: 100%
    .el-container
      flex: 1
</style>
