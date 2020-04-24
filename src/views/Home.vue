<template>
  <div class="home">
    <div class="container" v-if="loggedLv1">
      <b-row>
        <b-col sm="3">
          <LeftMenu />
        </b-col>
        <b-col sm="9">
          <RightContent :loggedLv2="loggedLv1" @eventLoggedLv2="changeStatusLogged"/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import LeftMenu from "@/components/LeftMenu.vue";
import RightContent from "@/components/RightContent.vue";

export default {
  name: "home",
  props: {
    loggedLv1: { type: Boolean, default: false }
  },
  created() {
    if (!this.loggedLv1) {
      this.$router.push("/login");
    }
  },
  computed: {},
  mounted() {},
  methods: {
    changeStatusLogged(data) {
      this.$emit('eventLoggedLv1', data);
    }
  },
  components: {
    LeftMenu,
    RightContent,
  },
};
</script>

<style>
.home .container {
  margin-top: 50px;
}
</style>
