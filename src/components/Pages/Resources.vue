<template>
  <div id=resourcepage>
    <p id=resource v-for="item in resources" :key="item.heading">
      <a v-bind:href="item.url" target="_blank"><b>{{ item.heading }}</b></a>
      <br>
      {{item.description}}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Resources',
    data() { 
      return {
      resources: [
        {
          heading: "Resource 1",
          url: "http://www.google.com",
          description: "Description of resource."
        },
        {
          heading: "Resource 2",
          url: "http://www.google.com",
          description: "Description of resource."
        },
        {
          heading: "Resource 3",
          url: "http://www.google.com",
          description: "Description of resource."
        },
        {
          heading: "Resource 1",
          url: "http://www.google.com",
          description: "Description of resource."
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
#resourcepage{
  margin: auto;
  padding: 50px
}
</style>