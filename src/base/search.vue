<template>
  <div class="search">
    <el-input v-model="input" prefix-icon="el-icon-search" :placeholder="inputPlaceholder"></el-input>
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
