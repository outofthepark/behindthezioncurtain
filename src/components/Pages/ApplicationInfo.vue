<template>
  <div id=apply>
    <p> We're always excited about new applications and new collaborators! Please don't let imposter syndrome stop you - just follow the link to apply for one of our upcoming shows!</p>
    <p id=applicationlist v-for="item in applications" :key="item.theme">
      <b>Behind the Zion Curtain: <a v-bind:href="item.url" target="_blank">{{ item.theme }}</a> due {{item.due}}</b>
      <br>
      {{item.description}} 
    </p>
  </div>
</template>

<script>
  export default {
    name: 'ApplicationInfo',
    data() { 
      return {
        applications: [
        {
          theme: "fools and follies",
          url: "https://bit.ly/btzc-apr1-cast",
          description: "This april we're hosting a riotous show full of flirtatious, lighthearted fun. Come play with us this show and exercise your right to be foolish, embrace your follies, and flirt with our audience 🤹🖤",
          due: "March 13th"
        },
        {
          theme: "may theme",
          url: "https://bit.ly/btzc-may6-cast",
          description: "This may we're hosting a  show and it will have a theme.",
          due: "April 8th"
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
#apply{
  margin: auto;
  padding: 50px
}
</style>