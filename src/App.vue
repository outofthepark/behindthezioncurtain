<template>
<div>
  <header id="header">
    <div>
      <Header msg="Behind the Zion Curtain"/>
    </div>
  </header>
    <NavBar navtitle="Title" drpdwn1= "Dropdown 1" drpdwn2= "Dropdown 2"/>
  </div>
  
</template>

<script>
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    Header,
    NavBar
  }
}
</script>

<style>

</style>
