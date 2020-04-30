<template>
  <div class="home">
    <div class="container">
      <b-row>
        <b-col sm="3">
          <LeftMenu />
        </b-col>
        <b-col sm="9">
          <RightContent />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import LeftMenu from "@/components/LeftMenu.vue";
import RightContent from "@/components/RightContent.vue";

export default {
  name: "home",
  props: {},
  created() {},
  computed: {},
  mounted() {},
  methods: {},
  components: {
    LeftMenu,
    RightContent
  }
};
</script>

<style>
.home .container {
  margin-top: 50px;
}
</style>
