<template>
  <div class="header">
    <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    <!--slot插槽中间的文字会随着父组件中的文字而改变，如：<MHeader>首页</MHeader>那么此时插槽中的文字就是首页-->
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    back: {
      type: Boolean, //校验类型
      default: false //设置默认值
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped <style lang="less">
.header {
  width: 100%;
  background: #393D49;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  i {
    position: absolute;
    left: 10px;
    font-size: 18px;
  }
}
</style>


