<template>
  <div class="right-content">
    <router-view :loggedLv3="loggedLv2" @eventLoggedLv3="changeStatusLogged" />
  </div>
</template>

<script>
export default {
  props: {
    loggedLv2: { type: Boolean, default: false }
  },
  methods: {
    changeStatusLogged(data) {
      this.$emit("eventLoggedLv2", data);
    }
  },
  components: {
    // InfoCustomer
  }
};
</script>

<style>
</style>