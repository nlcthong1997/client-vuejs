<template>
  <div id="app">
    <router-view :loggedLv1="logged" v-on:eventLoggedLv1="changeStatusLogged" />
  </div>
</template>

<script>
  

  export default {
    data () {
      return {
        logged: false
      }
    },
    methods: {
      changeStatusLogged(data) {
        this.logged = data.status;
      }
    },
    components: {
    }
  };
</script>