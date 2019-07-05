<template>
  <div class="left">
    <ul ref="lefNav">
      <li v-for="(item,index) in leftData" :key="index" :class="activeInd==index?'active':''" @click="leftNavClick(index)">
        <em></em>
        <span v-text="item.title"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "../api";
export default {
  name: "Left",
  props: ["reportList"],
  data() {
    return {
      leftData: [],
      activeInd: 0
    };
  },
  created() {
    this.getLeftList();
  },
  methods: {
    //语法糖
    // async await 为语法糖要成对使用，而await后面只能是promise的实例
    // await getLeftNavData() 为请求/leftData后的数据
    async getLeftList() {
      var data = await api.getLeftNavData();
      if (this.reportList) {
        this.leftData = data.result.reportList;
      } else {
        this.leftData = data.result.cateList;
      }
    },
    leftNavClick(ind) {
      this.activeInd = ind;
      this.$emit("left-tab",ind);
    }
  }
};
</script>
<style lang="less" scoped>
.left {
  width: 80px;
  height: 99.76%;
  color: #c2c2c2;
  background-color: #20222a;
  position: absolute;
  top: 0;
  left: 0;
  li {
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    position: relative;
    cursor: pointer;
    a {
      color: #c2c2c2;
    }
  }
  li.active {
    display: block;
    color: #fff;
    background: #5fb878;
  }
  li.active em {
    width: 6px;
    height: 40px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background: #ff5722;
  }
}
</style>


