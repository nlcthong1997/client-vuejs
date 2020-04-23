<template>
  <div class="home">
    <div class="container" v-if="loggedLv1">
      <b-row>
        <b-col sm="3">
          <LeftMenu />
        </b-col>
        <b-col sm="9">
          <RightContent :loggedLv2="loggedLv1"/>
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
    // this.fetchData();
  },
  computed: {},
  mounted() {},
  methods: {
    // fetchData() {
    //   let user = JSON.parse(localStorage.getItem("user"));
    //   if (!user) {
    //     localStorage.removeItem("user");
    //     this.$router.push("/");
    //   }
    //   axios
    //       .get("http://192.168.100.7:3001/user/info-customer/", {
    //         headers: {
    //           "x-access-token": user.accessToken,
    //         },
    //       })
    //       .then((res) => {
    //         console.log(res.data.customer);
    //         this.auth = true;
    //       })
    //       .catch((err) => {
    //         this.$router.push("/login");
    //       });
    // }
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
