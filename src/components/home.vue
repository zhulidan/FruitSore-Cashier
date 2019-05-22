<template>
    <div class="container">
        <Header>果子侠客</Header>
        <div class="content">
          <Left></Left>
        </div>
    </div>
</template>
<script>
import Header from '../base/Header';
import Left from '../base/Left'
export default {
    name:'Home',
    components:{
        Header,
        Left
    }
}
</script>

