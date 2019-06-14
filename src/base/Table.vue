<template>
  <div class="table">
    <div class="menu">
      <ul>
        <li v-for="(item,index) in menu" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="table-list">
      <ul>
        <li v-for="(item,ind) in tableList" :key="ind" :class="item.status=='warning'?'warning':''">
          <span v-for="(key,index) in menu" :key="index">{{item[key.field]}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Table",
    props: ["menu", "tableList"]
  }
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

      li {
        display: flex;
        border-bottom: 1px solid #e8e8e8;
      }
      li.warning{
        color: #ff0000;
      }
      span {
        line-height: 35px;
        display: flex;
        flex-direction: column;
        flex: 1;
        display: block;
        text-align: center;
      }
    }
  }
</style>
