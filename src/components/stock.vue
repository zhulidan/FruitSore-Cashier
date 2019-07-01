<template>
  <div>
    <Header>果子侠客 - 库存</Header>
    <div class="content">
      <Search :inputPlaceholder="inputPlaceholder" @search-event="searchEventFn"></Search>
      <Table :menu="tableMenu" :tableList="tableData"></Table>
    </div>
  </div>
</template>
<script>
import Header from "../base/Header";
import Table from "../base/Table";
import Search from "../base/search";
import api from "../api";
export default {
  name: "stock",
  components: {
    Header,
    Table,
    Search
  },
  data() {
    return {
      inputPlaceholder: "搜索产品或供货商名称",
      tableMenu: [
        {
          name: "品类",
          field: "type"
        },
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
        {
          name: "状态",
          field: "state"
        }
      ],
      tableData: []
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.getStockList();
    });
  },
  methods: {
    //语法糖
    // async await 为语法糖要成对使用，而await后面只能是promise的实例
    // await getLeftNavData() 为请求/leftData后的数据
    async getStockList() {
      var data = await api.getStockListData();
      this.tableData = data.result.resultList;
    },
    async searchEventFn(val){
      var data = await api.getOneStockInfo(val);
      // console.log(data.data)
      this.tableData = data.result.resultList;
    }
  }
};
</script>
<style>
.el-input__inner {
  height: 35px;
  line-height: 35px;
}
</style>

