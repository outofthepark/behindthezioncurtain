<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ name }}</h2>
    <h3>{{ fullName }}</h3>
    <button @click="promote">Promote</button>
    <button v-if="pageNum>0" @click="last">Last</button>
    <button v-if="pageNum<keypages.length-1" @click="next">Next</button>
    <button v-if="pageNum==keypages.length-1" @click="next">SECRET</button>
    <input v-model="name" />
    <pre>{{ keypages[pageNum] }}</pre>
    <pre>{{ pageNum }}</pre>
  </div>
</template>

<script>
import pages from '../text.json'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    promote: function () {
      this.title = Math.random()

    },
    next: function() { this.pageNum++ },
    last: function() { this.pageNum-- },
  },
  data: () => ({
    name: 'Bob',
    title: 'King',
    pageNum: 0,
    keypages: pages
  }),
  computed:  {
    fullName: function()  {return this.name + ' ' + this.title}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
