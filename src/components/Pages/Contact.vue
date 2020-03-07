<template>
  <div id="contactpage">
    <p>To reach us, visit our facebook page and send us a message or email us at email@email.com.</p>

    <b-form @submit="onSubmit" @reset="onReset">
      <!--Email Input-->
      <b-form-group>
        <b-form-input id="email" type="email" v-model="email" placeholder="your email"></b-form-input>
      </b-form-group>

      <!--Message Input-->
      <b-form-group>
        <b-form-textarea
        id="textarea"
        v-model="message"
        placeholder="Send us a message!"
        rows="6"
        max-rows="12"
        ></b-form-textarea>
      </b-form-group>

      <!--Submit or Reset-->
      <b-button style="margin-right:10px" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <!--Values Output-->
    <div class="mt-2">{{ email }}</div>
    <pre class="mt-3 mb-0">{{ message }}</pre>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
      computed: {
      username() {
        return this.$route.params.username
      }
    },
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.email = ''
        this.message = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
      data() {
        return {
          email: '',
          message: ''
        }
      }
    }
</script>

<style>
#contactpage{
  margin: auto;
  padding: 50px
}

#textarea{
  max-width: 600px
}

#email{
  max-width: 400px
}

</style>