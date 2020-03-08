<template>
  <div id="homepage">
    <hooper :settings="hooperSettings" id="homeslider">
    <slide class="sliderimage" :style="{backgroundImage: 'url('+require('@/assets/sliderimages/aprilgoldenshowers.png')+')'}"></slide>
    <slide class="sliderimage" :style="{backgroundImage: 'url('+require('@/assets/sliderimages/burlesque.png')+')'}"></slide>
    <slide class="sliderimage" :style="{backgroundImage: 'url('+require('@/assets/sliderimages/fistsinthewind.png')+')'}"></slide>
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
  padding: 10px;
}

#homeslider{
  margin: auto;
  height: auto;
}

.sliderimage{
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 666px
}
</style>