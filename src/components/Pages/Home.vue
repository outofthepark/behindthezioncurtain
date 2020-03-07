<template>
  <div id="homepage">
    <p>This is the Home page!</p>
    <hooper :settings="hooperSettings" id="homeslider">
    <slide id="sliderimage"><img src="@/assets/sliderimages/aprilgoldenshowers.png" /></slide>
    <slide id="sliderimage"><img src="@/assets/sliderimages/fistsinthewind.png" /></slide>
    <slide id="sliderimage"><img src="@/assets/sliderimages/burlesque.png" /></slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
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
#homepage{
  padding: 50px;
}

#homeslider{
  margin: auto;
  height: auto;
}

#sliderimage{
  width:1200px;
  height: 666px;
}
</style>