<template>
  <div>
    <Header>果子侠客 - 订单详情</Header>
    <div class="content">
      <div class="order_info">
        <ul>
          <li v-for="(item,ind) in orderDetail" :key="ind">
            <span class="order_title">{{item.label}}：</span>
            <span>{{orderInfo[item.field]}}</span>
          </li>
        </ul>
      </div>
      <Table :menu="tableMenu" :tableList="tableData" :isClick="true"></Table>
      <div class="order_price">总计：<span>￥{{orderInfo.total}}</span></div>
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
        {
          name: "单价",
          field: "unitPrice"
        },
        {
          name: "合计",
          field: "totalPrice"
        }
      ],
      tableData: [],
      orderInfo:{},
      orderDetail:[
        {label:'订单编号',field:'orderNumber'},
        {label:'进货日期',field:'orderDate'},
        {label:'进货人',field:'purchaser'},
      ]
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.getOrderDetailList();
      console.log()
    });
  },
  methods: {
    async getOrderDetailList() {
      var orderId = this.$route.params.orderId;
      var data = await this.Api.getOrderDetailData(orderId);
      this.tableData = data.result.resultList[0].list;
      this.orderInfo = data.result.resultList[0]
    }
  }
};
</script>

 <style lang="less" scoped>
 .order_info{
   margin: 6% 3% 3%;
   li{
     font-size: 12px;
     line-height: 24px;
   }
   .order_title{
     width: 60px;
     display: inline-block
   }
 }
 .order_price{
   margin: 3%;
   text-align: right;
   span{
     color: #ff3d00;
     font-size: 24px;
     line-height: 40px;
   }
 }
</style>

