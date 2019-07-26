<template>
  <div class="counter">
    <span class="el-icon-remove-outline" @click="setNumberReduce"></span>
    <span class="counter_num">{{curGood.num?curGood.num:number}}</span>
    <span class="el-icon-circle-plus-outline" @click="setNumberAdd"></span>
  </div>
</template>
<script>
export default {
  name: "counter",
  props: ["curGood"],
  data() {
    return {
      number: 0
    };
  },
  methods: {
    setNumberReduce() {
      if (this.number == 0) {
        return;
      }
      this.number = this.number - 1;
      this.saveShopData("reduce");
    },
    setNumberAdd() {
      this.number = this.number + 1;

      this.saveShopData();
    },
    saveShopData(type) {
      var proAry = [];
      proAry = this.$store.state.store.saleShopCarList;
      this.curGood.num = this.number  
      if (type == "reduce") {
        proAry = proAry.filter(
          item =>
            item.goodName != this.curGood.goodName && item.id != this.curGood.id
        );
      } else {
        
        proAry.push(this.curGood);
      }
      
      this.$store.dispatch("getNewSaleShopCarList", proAry);
    }
  }
};
</script>
<style lang="less" scoped>
.counter {
  span {
    font-size: 26px;
    color: #33ab9f;
    vertical-align: middle;
    cursor: pointer;
  }
  .counter_num {
    font-size: 16px;
    color: #333;
    padding: 0 5px;
  }
}
</style>

