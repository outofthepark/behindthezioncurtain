<template>
<div>
  <!--Social Media Nav-bar-->
  <b-nav id="mynavbar" align="right" type="dark" variant="dark">
    <a href="https://www.facebook.com/behindthezioncurtaincabaret" target="_blank"><img class="icon" src="@/assets/socialicons/fb.png" /></a>
        <a href="https://www.instagram.com/behindthezioncurtain/" target="_blank"><img class="icon" src="@/assets/socialicons/ig.png" /></a>
  </b-nav>

  <!--Header for brand name-->
  <Header/>

  <!--Main Nav-->
  <div id="mynavbardiv">
  <b-nav id="mynavbar" align="center" type="dark" variant="dark">
        
        <b-nav-item router-link to="/rsvp">RSVP</b-nav-item>
      

        <b-nav-item-dropdown text="Resources" left >
            <b-dropdown-item router-link to="/faq">FAQ</b-dropdown-item>
            <b-dropdown-item router-link to="/communityresources">Community Resources</b-dropdown-item>
            <b-dropdown-item router-link to="/faq">Placeholder</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Apply" left >
            <b-dropdown-item router-link to="/applicationinfo">Application Information</b-dropdown-item>
            <b-dropdown-item href="https://bit.ly/btzc-apr1-cast" target="_blank">April Application</b-dropdown-item>
            <b-dropdown-item href="https://bit.ly/btzc-mar6-cast" target="_blank">April Application</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item router-link to="/contact">Contact Us</b-nav-item>
  </b-nav>
  </div>

</div>
</template>

<script>
import Header from './Header.vue'

export default {
  name: 'NavBar',
  props: {
  },
  components: {
    Header
  }
}
</script>

<style>
#mynavbar{
  background-color: rgb(51,51,51) !important;
  font-family: 'Lato', sans-serif !important;
  text-transform: uppercase;
  font-weight: 600 !important;
  font-size: 22px;
}

#mynavbardiv{
  background-color: rgb(51,51,51);
  padding: 10px;
}

#mynavbar a {
  color: white;
}

#mynavbar a:hover {
  color: rgb(207,32,43)
}

#mynavbar .router-link-exact-active.router-link-active{
  color:rgb(207,32,43);
}

#mynavbar>li {
  border-right: 1px solid #bbb;
  line-height: .5;
}

.dropdown-menu{
  background-color: rgb(51,51,51) !important;
  line-height: 1.5;
}


img.icon{
  width: 20px;
  height: 20px;
  float: right;
  vertical-align: middle;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
