<template>
  <header id="header">
    <div id=headermsg>
      <Header msg="Behind the Zion Curtain"/>
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">See</a>
        <a href="#news">That's</a>
        <a href="#contact">Not</a>
        <a href="#about">So</a>
        <a href="#about">Bad</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
#header {
  background: url(./assets/headerplaceholder.png);
  width: 100%;
  height: auto;
}

#headermsg{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 1%;
  color: #2c3e50;
}

/* Add a background color to the top navigation */
.topnav {
  background-color: #757d98;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add an active class to highlight the current page */
.topnav a.active {
  background-color: #b6bed8;
  color: white;
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
  display: none;
}
</style>
