<template>
  <div class="option11">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.testCahe()
  },
  methods: {
    testCahe () {
      this.$axios.post('/api/list').then(res => {
        this.list = res.list
      })
    }
  }
}
</script>
