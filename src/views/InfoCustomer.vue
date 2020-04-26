<template>
  <div>
    <b-card title="Thông tin tài khoản">
      <hr />
      <b-row>
        <b-col></b-col>
        <b-col cols="8">
          <div class="line-bar"></div>

          <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Tên tài khoản">
            <b-form-input id="fullName" :value="infoCustomer.fullName" readonly="readonly"></b-form-input>
          </b-form-group>

          <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Số tài khoản">
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </b-form-group>

          <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Số dư hiện tại">
            <b-row>
              <b-col cols="9">
                <b-form-input id="fullName" :value="selected.amount" readonly="readonly"></b-form-input>
              </b-col>
              <b-col>
                <b-form-input id="currency" :value="selected.currency" readonly="readonly"></b-form-input>
              </b-col>
            </b-row>
          </b-form-group>
          
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { fetch } from "../utils/apiCaller";

export default {
  props: {
    loggedLv3: { type: Boolean, default: false }
  },
  data() {
    return {
      infoCustomer: {},
      listCard: [],
      isTokenExpired: false,
      isLoadding: false,
      options: [],
      selected: null
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    isTokenExpired: async function(isExpired) {
      if (isExpired) {
        const tokenStorage = JSON.parse(localStorage.getItem("token"));
        await this.getAndSetNewToken(tokenStorage);
        await this.fetchData();
      }
    },
    isLoadding: function(isLoad) {
      if (isLoad) {
        this.appendListCard(this.listCard);
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
          this.infoCustomer = res.data.customer;
          this.listCard = res.data.listCard;
          this.isTokenExpired = false;
          this.isLoadding = true;
        })
        .catch(err => {
          if (err.status == 401) {
            this.isTokenExpired = true;
          }
        });
    },

    appendListCard(listCard) {
      listCard.map(card => {
        if (card.type == "pay") {
          this.selected = {
            amount: card.currentAmount,
            currency: card.currency
          };
        }
        this.options.push({
          value: { amount: card.currentAmount, currency: card.currency },
          text: card.cardNumber
        });
      });
    },

    async getAndSetNewToken(token) {
      let isError = false;
      await fetch("/auth/login", "PUT", token)
        .then(res => {
          localStorage.setItem("token", JSON.stringify(res.data));
        })
        .catch(err => {
          if (err.data === "jwt expired" || err.status == 400) {
            isError = true;
          }
          console.error("Get new token failed: ", err.data);
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
.line-bar {
  margin-top: 1em;
}
</style>
