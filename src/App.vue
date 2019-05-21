<template>
  <div id="app">
    <router-view/>
    <Tab></Tab>
    
  </div>
</template>

<script>
import Tab from './base/Tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style>
</style>
