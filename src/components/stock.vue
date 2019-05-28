<template>
    <div>
        <Header>果子侠客 - 库存</Header>
        <div class="content">
          <Table :menu = "tableMenu" :tableList="tableData"></Table>
        </div>
    </div>
</template>
<script>
import Header from '../base/Header'
import Table from '../base/Table'
export default {
    name: 'stock',
    components:{
        Header,
      Table
    },
    data(){
      return {
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
            state:'充足'
          }
        ]
      }
    }
}
</script>

<style>

</style>

