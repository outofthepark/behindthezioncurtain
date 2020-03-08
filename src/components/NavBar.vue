<template>
<div>
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

        <a href="https://www.facebook.com/behindthezioncurtaincabaret" target="_blank"><img class="icon" src="@/assets/socialicons/fb.png" /></a>
        <a href="https://www.instagram.com/behindthezioncurtain/" target="_blank"><img class="icon" src="@/assets/socialicons/ig.png" /></a>

  </b-nav>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
  },
}
</script>

<style scoped>
#mynavbar{
  background-color: black !important;
  font-family: 'Lato', sans-serif !important;
  text-transform: uppercase;
  font-weight: 600 !important;
  font-size: 22px;
}

.nav-item{
  color: white !important
}

img.icon{
  width: 25px;
  height: 25px;
  float: right;
  vertical-align: middle;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
