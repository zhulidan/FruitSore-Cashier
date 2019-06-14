<template>
  <div class="left">
    <ul>
      <li v-for="(item,index) in leftData" :key="index">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
  import api from '../api';
  export default {
    name: 'Left',
    data() {
      return {
        leftData: []
      }
    },
    created() {
      this.getLeftList()
    },
    methods: {
      //语法糖
      // async await 为语法糖要成对使用，而await后面只能是promise的实例
      // await getLeftNavData() 为请求/leftData后的数据
      async getLeftList() {
        var data = await api.getLeftNavData();
        console.log(data)
        this.leftData = data.result.cateList
      }

    }
  }
</script>
<style lang="less" scoped>
  .left {
    width: 80px;
    height: 99.76%;
    color: #c2c2c2;
    background-color: #20222a;

    li {
      height: 40px;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
    }
  }
</style>


