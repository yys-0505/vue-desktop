<template>
  <div class="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="login-form">
      <el-form-item label="姓名" prop="name">
        <el-input type="text" placeholder="admin" v-model="ruleForm2.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" placeholder="admin" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { setData } from 'utils'
export default {
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入姓名'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        name: 'admin',
        pass: 'admin'
      },
      rules2: {
        name: [
          { validator: validateName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = {
            name: this.ruleForm2.name,
            pass: this.ruleForm2.pass
          }
          console.log(params)
          setData('username', 'admin')
          this.$router.push({path: '/home'})
          // this.$axios.post('/api/login', params).then(res => {
          //   setData('username', 'admin')
          //   this.$router.push({path: '/home'})
          // })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.ruleForm2 = {
        name: '',
        pass: ''
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.login
  background: url('../assets/images/loginbg.jpg') no-repeat
  background-size: 104% 106%
  background-position: center
  background-clip: border-box
  height: 100%
  padding-top: 280px
  box-sizing: border-box
  .login-form
    width: 30%
    margin: 0 auto
</style>
