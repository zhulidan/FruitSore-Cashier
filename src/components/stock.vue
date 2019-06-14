<template>
    <div>
        <Header>果子侠客 - 库存</Header>
        <div class="content">
          <Search :inputPlaceholder="inputPlaceholder"></Search>
          <Table :menu = "tableMenu" :tableList="tableData"></Table>
        </div>
    </div>
</template>
<script>
import Header from '../base/Header';
import Table from '../base/Table';
import Search from '../base/search';
export default {
    name: 'stock',
    components:{
      Header,
      Table,
      Search
    },
    data(){
      return {
        inputPlaceholder:'搜索产品或供货商名称',
        tableMenu:[
          {
            name:'品类',
            field:'type'
          },
          {
            name:'商品名称',
            field:'name'
          },
          {
            name:'产地',
            field:'product'
          },
          {
            name:'供应商',
            field:'supplier'
          },
          {
            name:'数量',
            field:'number'
          },
          {
            name:'状态',
            field:'state'
          }
        ],
        tableData:[
          {
            type:'水果蔬菜',
            name:'进口脐橙',
            product:'美国加州',
            supplier:'Hansom',
            number:'100',
            state:'预警',
            status:'warning'
          },
          {
            type:'水果蔬菜',
            name:'进口香蕉',
            product:'美国加州',
            supplier:'Hansom',
            number:'100',
            state:'充足',
            status:''
          }
        ]
      }
    }
}
</script>
<style>
  .el-input__inner{
    height: 35px;
    line-height: 35px;
  }
</style>

