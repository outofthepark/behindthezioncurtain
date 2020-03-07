<template>
  <div id=rsvppage>
    <p> The law requires that we have our attendees RSVP to our events prior to attending. Draconian, we know. You can RSVP for anyone of our upcoming shows following  the links below!</p>
    <p id=applicationlist v-for="item in rsvp" :key="item.theme">
      <b>Appply to Behind the Zion Curtain: <a v-bind:href="item.url" target="_blank">{{ item.theme }}</a>!</b>
      <br>
      {{item.description}} 
    </p>
  </div>
</template>

<script>
  export default {
    name: 'RSVP',
    data() { 
      return {
        rsvp: [
        {
          theme: "fools and follies",
          url: "https://bit.ly/btzc-apr1-rsvp",
          description: "This april we're hosting a riotous show full of flirtatious, lighthearted fun. Come play with us this show and exercise your right to be foolish, embrace your follies, and flirt with our audience 🤹🖤",
        },
        {
          theme: "may theme",
          url: "https://bit.ly/btzc-may6-rsvp",
          description: "This may we're hosting a show and it will have a theme.",
        },
      ]
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
#rsvppage{
  margin: auto;
  padding: 50px
}
</style>