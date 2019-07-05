<template>
  <div class="product">
    <div class="product_title">水果</div>
    
    <div class="product_list">
        <ul>
            <li>
                <span class="product_img"><img src=""> </span>
                <span class="product_info"></span>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "product"
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
}
</style>
