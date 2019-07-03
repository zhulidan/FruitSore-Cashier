<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-jinrudianpu"></i>
      <span>店铺</span>
    </router-link>
    <router-link to="/purchaseOrder">
      <i class="iconfont icon-huoche"></i>
      <span>进货</span>
    </router-link>
    <router-link to="/stock">
      <i class="iconfont icon-stock"></i>
      <span>库存</span>
    </router-link>
    <router-link to="/reportForm" @click.prevent="gg">
      <i class="iconfont icon-tongjibaobiao"></i>
      <span>报表</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Tab",
  methods:{
    gg(){
      this.$router.push('/reportForm/1')
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  border-top: 1px solid #ccc;
  a {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    color: #009688;
  }
  a.router-link-active {
    color: #ffb800;
  }
  span {
    padding-top: 4px;
  }
}
</style>

