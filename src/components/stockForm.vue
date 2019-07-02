<template>
  <div>
    <Header>果子侠客 - 报表</Header>
    <div class="content">
      <Left :reportList="true"></Left>
    </div>
  </div>
</template>
<script>
  import Header from '../base/Header';
  import Left from '../base/Left';

  export default {
    name: 'reportForm',
    components: {
      Header,
      Left
    }
  }
</script>

<style>

</style>

