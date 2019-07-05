<template>
  <div class="container">
    <Header>果子侠客</Header>
    <div class="content">
      <Left @left-tab="leftClickList"></Left>
      <div class="right">
        <div class="right_con">
          <Search :inputPlaceholder="inputPlaceholder" @search-event="searchEventFn"></Search>
          <Product></Product>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../base/Header";
import Left from "../base/Left";
import Product from "../base/product";
import Search from "../base/search";
export default {
  name: "Home",
  components: {
    Header,
    Left,
    Product,
    Search
  },
  data() {
    return {
      inputPlaceholder: "搜索产品或供货商名称"
    };
  },
  methods: {
    leftClickList(val) {},
    async searchEventFn(val) {}
  }
};
</script>
<style lang="less" scoped>
.right_con {
  padding: 0 3%;
}
</style>


