<template>
  <div>
    <Header>果子侠客 - 进货订单</Header>
    <div class="content">
      <Search :inputPlaceholder="inputPlaceholder" @search-event="searchEventFn"></Search>
      <Table :menu="tableMenu" :tableList="tableData" :isClick="true" @order-info="getOrderInfoFn"></Table>
      <router-view></router-view>
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
          field: "orderNumber"
        },
        {
          name: "订单名称",
          field: "orderName"
        },
        {
          name: "订单日期",
          field: "orderDate"
        },
        {
          name: "操作",
          field: "operation"
        }
      ],
      tableData: []
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.getOrderList();
    });
  },
  methods: {
    async getOrderList() {
      var datas = await this.Api.getPurchaseOrderData();
      this.tableData = datas.result.resultList;
    },
    getOrderInfoFn(num) {
      this.$router.push({path: `/purchaseOrder/${num}`})
    },
    async searchEventFn(val) {
      var data = await this.Api.getOnePurchaseOrderInfo(val);
      this.tableData = data.result.resultList;
    }
  }
};
</script>

 <style lang="less" scoped>
</style>

