<template>
  <div>
    <Header>果子侠客 - 订单详情</Header>
    <div class="content">
      <Table :menu="tableMenu" :tableList="tableData" :isClick="true" ></Table>
    </div>
  </div>
</template>
<script>
import Header from "../base/Header";
import Table from "../base/Table";
import Search from "../base/search";
export default {
  name: "stockPurchase",
  components: {
    Header,
    Table,
    Search
  },
  data() {
    return {
      inputPlaceholder: "搜索产品名称",
      tableMenu: [
        {
          name: "商品名称",
          field: "name"
        },
        {
          name: "产地",
          field: "product"
        },
        {
          name: "供应商",
          field: "supplier"
        },
        {
          name: "数量",
          field: "number"
        },
      ],
      tableData: []
    };
  },
  mounted() {
    this.$nextTick(function() {
     
    });
  },
  methods: {
    async getOrderList() {
   
    },
  }
};
</script>

 <style lang="less" scoped>
</style>

