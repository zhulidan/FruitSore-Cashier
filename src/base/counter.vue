<template>
    <div class="counter">
        <span class="el-icon-remove-outline" @click="setNumberReduce"></span>
        <span class="counter_num">{{number}}</span>
        <span class="el-icon-circle-plus-outline" @click="setNumberAdd"></span>
    </div>
</template>
<script>
export default {
    name:'counter',
    data(){
        return{
            number:1
        }
    },
    methods:{
        setNumberReduce(){
            this.number = this.number - 1
        },
        setNumberAdd(){
            this.number = this.number + 1
        }
    }
}
</script>
<style lang="less" scoped>
.counter{
    span{
        font-size: 26px;
        color: #33ab9f;
        vertical-align: middle;
        cursor: pointer;
    }
    .counter_num{
        font-size: 16px;
        color: #333;
        padding: 0 5px;
    }
}
</style>

