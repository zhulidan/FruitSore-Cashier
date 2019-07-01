<template>
  <div class="search">
    <el-input prefix-icon="el-icon-search" v-model="input" :placeholder="inputPlaceholder" @change="searchInfo"></el-input>
  </div>
</template>

<script>

  export default {
    name: "search",
    props:['inputPlaceholder'],
    data() {
      return {
        input: ''
      }
    },
    methods:{
      searchInfo(){
        this.$emit('search-event',this.input)
      }
    }
  }
</script>

<style scoped lang="less">
.search{
  background: #efeff4;
  padding: 2%;
  margin-top: 1.5%;
}
</style>
