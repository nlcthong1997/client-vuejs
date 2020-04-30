<template>
  <div id="app">
    <!-- <router-view :loggedLv1="logged" @eventLoggedLv1="changeStatusLogged" /> -->
    <router-view />
  </div>
</template>

<script>
  

  export default {
    data () {
      return {
        // logged: false
      }
    },
    methods: {
      // changeStatusLogged(data) {
      //   this.logged = data.status;
      // }
    },
    components: {
    }
  };
</script>