<template>
  <div>
    <b-card title="Thông tin tài khoản">
      <div class="info">
        Kính chào quý khách
        <br />
        <br />
      </div>
      <div class="content">
        <b-table hover :items="items"></b-table>
      </div>
    </b-card>
  </div>
</template>

<script>
import { fetch } from "../utils/apiCaller";
// import * as axios from "axios";
export default {
  props: {
    loggedLv3: { type: Boolean, default: false }
  },
  data() {
    return {
      items: [
        { "Thông tin": "Tên tài khoản", "Nội dung": "" },
        { "Thông tin": "Số tài khoản", "Nội dung": "" },
        { "Thông tin": "Số dư hiện tại", "Nội dung": "" },
        { "Thông tin": "Loại tiền tệ", "Nội dung": "" }
      ],
      infoCustomer: [],
      isTokenExpired: false,
      isLoadding: false
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    isTokenExpired: async function (isExpired) {
      if (isExpired) {
        const tokenStorage = JSON.parse(localStorage.getItem("token"))
        await this.getAndSetNewToken(tokenStorage);
        await this.fetchData();
      }
    },
    isLoadding: function (isLoad) {
      if (isLoad) {
        this.appendData(this.infoCustomer);
        this.isLoadding = false;
      }
    }
  },
  methods: {
    fetchData() {
      let tokenStorage = JSON.parse(localStorage.getItem("token"));

      if (!tokenStorage || !this.loggedLv3) {
        this.removeClientData();
        this.$router.push("/");
      }

      fetch("/info-customer", "GET")
        .then(res => {
          console.log(res.data.customer);
          this.infoCustomer = res.data.customer;
          this.isTokenExpired = false;
          this.isLoadding = true;
        })
        .catch(err => {
          if (err.status == 401) {
            this.isTokenExpired = true;
          }
        })
    },

    appendData(data) {
      this.items[0]["Nội dung"] = data.fullName;
      // this.items[1]["Nội dung"] = data.cardNumber;
      // this.items[2]["Nội dung"] = data.currentAmount;
      // this.items[3]["Nội dung"] = data.currency;
    },

    async getAndSetNewToken(token) {
      let isError = false;
      await fetch("/auth/login", "PUT", token)
        .then(res => {
          localStorage.setItem("token", JSON.stringify(res.data));
        })
        .catch(err => {
          if (err.data === 'jwt expired' || err.status == 400) {
            isError = true;
          }
          console.error('Get new token failed: ', err.data);
        });
      
      if (isError) {
        this.removeClientData();
      }
    },

    removeClientData() {
      localStorage.removeItem("token");
      this.$emit("eventLoggedLv3", { status: false });
      this.$router.push("/login");
    }
  }
};
</script>

<style>
</style>