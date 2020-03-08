<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand router-link to="/">{{ navtitle }}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>

      <!-- Left aligned nav items -->
      <b-navbar-nav >
        <b-nav-item router-link to="/rsvp">RSVP</b-nav-item>
      

        <b-nav-item-dropdown text="Resources" left >
            <b-dropdown-item router-link to="/faq">FAQ</b-dropdown-item>
            <b-dropdown-item router-link to="/communityresources">Community Resources</b-dropdown-item>
            <b-dropdown-item router-link to="/faq">Placeholder</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Apply" left >
            <b-dropdown-item router-link to="/applicationinfo">Application Information</b-dropdown-item>
            <b-dropdown-item ><a href="https://bit.ly/btzc-apr1-cast" target="_blank">April Application</a></b-dropdown-item>
            <b-dropdown-item ><a href="https://bit.ly/btzc-may6-cast" target="_blank">May Application</a></b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item router-link to="/contact">Contact Us</b-nav-item>

        <a href="https://www.facebook.com/behindthezioncurtaincabaret" target="_blank"><img class="icon" src="@/assets/socialicons/fb.png" /></a>
        <a href="https://www.instagram.com/behindthezioncurtain/" target="_blank"><img class="icon" src="@/assets/socialicons/ig.png" /></a>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    navtitle: String,
    //navigation: Object
  },
}
</script>

<style scoped>
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
