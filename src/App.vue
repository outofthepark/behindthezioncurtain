<template>
<div>
    <Header />
    <NavBar navtitle="Behind the Zion Curtain Cabaret" 
    />
    <router-view></router-view>
  </div>
  
</template>

<script>
import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Header
  }
}
</script>

<style>

</style>
