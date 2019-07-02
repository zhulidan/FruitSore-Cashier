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
      this.getBarChartData();
    });
  },
  methods: {
    async getBarChartData() {
      var data = await this.Api.getReportBarCharts();
       data = data.result;
       
      var options = {
        dom: "bar_chars",
        bg: "#3ba1ff",
        title: data.title,
        xData:data.dateList,
        yData:data.list ,
        left: "2%",
        right: "3%",
        bottom: "3%",
        top: "40px"
      };

      var ects = this.Utils.barChart(options, "#666", this);
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
.right {
  padding-top: 20%;
}
.bar_chart {
  margin: 0 5% 20%;
  padding-top: 10px;
  background: #fff;
  height: 60%;
}
</style>