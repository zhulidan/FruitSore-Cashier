<template>
  <div>
    <Header>果子侠客 - 进货</Header>
    <div class="content">
      <Search :inputPlaceholder="inputPlaceholder"></Search>
      <Table :menu="tableMenu" :tableList="tableData"></Table>
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
          name: "订单编号",
          field: "type"
        },
        {
          name: "订单名称",
          field: "name"
        },
        {
          name: "订单日期",
          field: "product"
        },
        {
          name: "操作",
          field: "supplier"
        }
      ],
      tableData: []
    };
  }
};
</script>

<style>
</style>

