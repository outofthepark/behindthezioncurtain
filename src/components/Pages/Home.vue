<template>
  <div id="homepage">
    <hooper :settings="hooperSettings" id="homeslider">
      <slide class="sliderimage" :style="{backgroundImage: 'url('+require('@/assets/sliderimages/aprilgoldenshowers.png')+')'}"></slide>
      <slide class="sliderimage" :style="{backgroundImage: 'url('+require('@/assets/sliderimages/burlesque.png')+')'}"></slide>
      <slide class="sliderimage" :style="{backgroundImage: 'url('+require('@/assets/sliderimages/fistsinthewind.png')+')'}"></slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
    <div id="hooperdiv">
      <p id="hoopertext">Come see our Next Show!
        <br>April 1st: Fools and Follies
        <br>$10 per person, doors at 7, show at 8
      </p>
      <a href="https://bit.ly/apr1/rsvp" target=_blank><b-button id="rsvpbutton">RSVP NOW!</b-button></a>
    </div>
  </div>
</template>

<script>
import { Hooper, 
    Slide,
    Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';

  export default {
    name: 'Home',
    components: {
        Hooper,
        Slide,
        HooperNavigation
    },
    data() {
        return {
            hooperSettings: {
                itemsToShow: 1,
                centerMode: true,
                progress: true,
                autoPlay: true,
                playSpeed: 6000,
                infiniteScroll: true,
                wheelControl: false,
                hoverpause: true
            }
        }
    },
    computed: {
      username() {
        return this.$route.params.username
      }
    },
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
    }
  }
</script>

<style>

#homeslider{
  margin: auto;
  height: 600px;
}

.hooper-next, .hooper-prev{
  background-color: rgb(170,170,170,.5) !important;
  border-radius: 50px !important;
  margin: 5px !important;
}

/*This was ineffective but I'm leaving up because I'd like to know why*/
.icon.icon-arrowLeft, .icon.icon-arrowRight{
  color: white !important;
}

.sliderimage{
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
}

#hooperdiv{
   background-color: rgba(51,51,51,.5);
   color: white;
   font-family: 'Lato', sans-serif;
   font-size: 19px;
   text-transform: uppercase;
   text-align:left;
   position: relative;
   padding-top: 25px;
   padding-bottom: 20px;
   padding-left: 150px;
   padding-right: 40px;
   bottom: 200px;
   top: 50%
}

#rsvpbutton{
  background-color: rgb(207,32,43);
   border: none;
   color: white;
   font-family: 'Lato', sans-serif;
   font-size: 22px;
   text-transform: uppercase;
  float: right;
  position:relative;
  bottom: 80px;
  right:150px;
  padding-left: 30px;
  padding-right: 30px;
}

#rsvpbutton:hover{
  background-color: rgb(119, 17, 24);
  border: none;
}

</style>