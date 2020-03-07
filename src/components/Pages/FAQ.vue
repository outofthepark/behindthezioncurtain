<template>
  <div id=faqpage>
    <p id=questions v-for="item in faq" :key="item.question">
      <b>{{ item.question }}</b>
      <br>
      {{item.answer}} 
    </p>
  </div>
</template>

<script>
  export default {
    name: 'FAQ',
    data() { 
      return {
      faq: [
        {
          question: "Question?",
          answer: "Answer answer answer"
        },
        {
          question: "Why  is the sky blue?",
          answer: "Because I said so."
        },
        {
          question: "Why  is the sky blue?",
          answer: "Because I said so."
        },
        {
          question: "Why  is the sky blue?",
          answer: "Because I said so."
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
#faqpage{
  margin: auto;
  padding: 50px
}
</style>