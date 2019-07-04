<template>
  <div class="table">
    <div class="menu">
      <ul>
        <li v-for="(item,index) in menu" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="table-list" id="tableBox">
      <p v-if="tableList.length == 0">暂无数据</p>
      <ul>
        <li v-for="(item,ind) in tableList" :key="ind" :class="item.status=='warning'?'warning':''">
          <template v-if="isClick">
            <span
              v-for="(key,index) in menu"
              :key="index"
              :title="isClick&&key.field!='operation'?item[key.field]:''"
              :style="{width:isClick?tdWidth+'px':''}"
            > 
              <em v-if='key.field!="operation"'>{{item[key.field]}}</em>
              <a href="#" v-else @click.prevent="getOrderInfo(item.orderNumber)">{{item[key.field]}}</a>  
            </span>
          </template>
          <span v-else v-for="(key,index) in menu" :key="index">{{item[key.field]}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["menu", "tableList", "isClick"],
  data() {
    return {
      tdWidth: ""
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.getTableTdWidth();
    });
  },
  methods: {
    getTableTdWidth() {
      if (this.isClick) {
        var ele = document.getElementById("tableBox");
        this.tdWidth = parseFloat(
          ele.offsetWidth / this.menu.length - this.menu.length - 1
        ).toFixed(2);
      }
    },
    getOrderInfo(orderNum){
      this.$emit("order-info",orderNum)
    }
  }
};
</script>

<style scoped lang="less">
.table {
  width: 96%;
  margin: 10px auto;

  .menu {
    height: 35px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    background-color: #f4f4f4;

    ul {
      display: flex;
    }

    li {
      line-height: 35px;
      text-align: center;
      color: #262626;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }

  .table-list {
    background-color: #fff;
    p {
      border-bottom: 1px solid #e8e8e8;
      text-align: center;
      line-height: 35px;
    }
    li {
      display: flex;
      border-bottom: 1px solid #e8e8e8;
    }
    li.warning {
      color: #ff0000;
    }
    li span {
      line-height: 35px;
      display: flex;
      flex-direction: column;
      flex: 1;
      display: inline-block;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
      a{
        color: #32a8ff
      }
      a:hover{
        color: #ffb800
      }
    }
  }
}
</style>
