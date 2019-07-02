<template>
  <div>
    <Header>果子侠客 - 报表</Header>
    <div class="content">
      <Left :reportList="true"></Left>
      <div class="right">
         <div id="bar_chars" class="bar_chart"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../base/Header";
import Left from "../base/Left";

export default {
  name: "reportForm",
  components: {
    Header,
    Left
  },
  mounted() {
    this.$nextTick(function() {
      this.echarsBar2();
    });
  },
  methods: {
    echarsBar2() {
      var options = {
        dom: "bar_chars",
        bg: "#ff9a22",
        title: "",
        xData: ["通勤车", "高峰车", "路过车"],
        yData: [13499, 2523, 91757],
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "3%"
      };

      var ects = this.Utils.barChart(options, "#000", this);
      window.onresize = function() {
        if (ects) {
          ects.resize();
        }
      };
    }
  }
};
</script>

<style  lang="less" scoped>
.bar_chart {
  margin:20% 5% 20%;
  background: #fff;
  height: 60%;
}
</style>