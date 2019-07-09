<template>
  <div class="product">
    <div class="product_title">水果</div>

    <div class="product_list">
      <ul>
        <template v-if="type">
          <li v-for="(item,index) in productList" :key="index">
            <div class="product_img">
              <img :src="item.goodImg" />
            </div>
            <div class="product_info">
              <div class="pro_tit">
                <span class="pro_name" v-text="item.goodName"></span>
                <span class="pro_price">
                  <em>￥{{item.goodPrice}}</em>
                  / {{item.goodUnit}}
                </span>
              </div>
              <div class="product_weight" v-if="item.goodUnit=='kg'">
                <span class="pro_weiNum">0.0kg</span>
                <span class="pro_weiBtn">称重</span>
              </div>
              <div class="product_num" v-if="item.goodUnit!='kg'">
                <Counter :curGood="item"></Counter>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
import Counter from "./counter";
export default {
  name: "product",
  props: ["productList", "productFeild", "type"],
  components: {
    Counter
  }
};
</script>
<style lang="less" scoped>
.product {
  .product_title {
    width: 100%;
    background: #ffb800;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    line-height: 40px;
    text-align: center;
    margin-top: 12px;
  }

  .pro_weiBtn {
    width: 70px;
    display: inline-block;
    background: #33ab9f;
    border-radius: 4px;
    text-align: center;
    color: #fff;
    line-height: 30px;
  }
  .pro_weiNum {
    color: #33ab9f;
  }
  .product_info {
    width: 100%;
    position: relative;
  }
  .product_weight {
    position: absolute;
    right: 10px;
    bottom: 5px;
  }
  .pro_tit {
    line-height: 30px;
  }
  .pro_price em {
    font-size: 20px;
    color: #ff5722;
  }
  .product_num {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
@media screen and (max-width: 767px) {
  .product_list {
    li {
      display: flex;
      padding: 10px 10px 10px 0;
    }
    .product_img {
      float: left;
      margin-top: 2px;
      border-radius: 4px;
      margin-right: 10px;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .pro_name {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: #393d49;
      max-height: 42px;
      line-height: 24px;
      word-break: break-all;
    }
  }
}
@media screen and (min-width: 768px) {
  .product_list {
    li {
      width: 31.3333%;
      display: inline-block;
      margin-right: 2%;
      margin-bottom: 2%
    }
    li:nth-child(3n) {
      margin-right: 0;
    }
    .product_img {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
    .product_info,
    .product_info div {
      width: 100%;
      display: block;
    }
    .product_weight,
    .product_num {
      position: inherit;
    }
    .pro_name {
      font-size: 16px;
      line-height: 40px;
      font-weight: 400;
    }
    .pro_price {
      float: right;
      font-size: 14px;
    }
    .product_num{
      margin: 6px 0 0 10px;
       text-align: right
    }
    .product_weight{
      text-align: right
    }
  }

}
</style>
