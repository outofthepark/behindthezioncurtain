<template>
  <div id="homepage">
    <hooper :settings="hooperSettings" id="homeslider">
    <slide class="sliderimage" :style="{backgroundImage: 'url('+require('@/assets/sliderimages/aprilgoldenshowers.png')+')'}"></slide>
    <slide class="sliderimage" :style="{backgroundImage: 'url('+require('@/assets/sliderimages/burlesque.png')+')'}"></slide>
    <slide class="sliderimage" :style="{backgroundImage: 'url('+require('@/assets/sliderimages/fistsinthewind.png')+')'}"></slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
  <p>Text to see where hooper slide ends</p>
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
</style>