<template>
  <div class="container">
    <Header>果子侠客</Header>
    <div class="content">
      <Left @left-tab="leftClickList"></Left>
      <div class="right">
        <div class="right_con">
          <Search :inputPlaceholder="inputPlaceholder" @search-event="searchEventFn"></Search>
          <Product :productList="productList" :productFeild="productFiled" :type="true"></Product>
        </div>
        <div class="right_shop_car">
          <ul>
            <li><i class="iconfont icon-gouwuche"></i></li>
            <li><span>购物车</span><em>(3)</em></li>
          </ul>
          
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
      inputPlaceholder: "搜索产品或供货商名称",
      productList: [],
      productFiled: [
        { filed: "goodImg" },
        { filed: "goodName" },
        { filed: "goodPrice" }
      ]
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.getProductList();
    });
  },
  methods: {
    async getProductList(type) {
      type = type ? type : "fruits";
      var data = await this.Api.getSaleProductList(type);
      console.log(data);
      this.productList = data.result.resultList;
    },
    leftClickList(val) {
        var type = "";
        if(val==0){
            type=  "fruits";
        }else if(val==1){
             type=  "vegetables";
        }else if(val==2){
            type=  "grainAndOil";
        }else if(val==3){
            type = "meatAndEggs"
        }else if(val==4){
            type ="seafood";
        }
        this.getProductList(type) 
    },

    async searchEventFn(val) {}
  }
};
</script>
<style lang="less" scoped>
.right_con {
  padding: 0 3%;
}
.right{
  position: relative;
}
.right_shop_car{
  position: fixed;
  bottom: 60px;
  right: 3%;
  width: 80px;
  height: 68px;
  background: #ffb800;
  border-radius: 6px;
  text-align: center;
  color: #fff;
  padding-top: 15px ;
  box-sizing: border-box;
  line-height: 35px;
  li{
    padding-bottom: 10px;
    span{
      font-size: 14px;
    }
    em{
      font-size: 14px;
    }
  }
  i{
    font-size: 26px;
    font-weight: 500
  }
}
</style>


