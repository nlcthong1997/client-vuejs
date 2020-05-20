<template>
  <div>
    <b-card title="Đổi Password">
      <hr />

      <b-container>
        <b-row>
          <b-col></b-col>
          <b-col cols="8">
              <label>Current Password</label>
              <div class="form-group pass_show">
                <input type="password" class="form-control" placeholder="Current Password" />
              </div>
              <label>New Password</label>
              <div class="form-group pass_show">
                <input type="password" class="form-control" placeholder="New Password" />
              </div>
              <label>Confirm Password</label>
              <div class="form-group pass_show">
                <input type="password" class="form-control" placeholder="Confirm Password" />
              </div>

              <b-container>
               <b-row class="text-center">
                <b-col> </b-col>
                <b-col  >
                 
                </b-col>
                <b-col> 
                  <b-button variant="danger">Hủy</b-button>
                <b-button id="luu" variant="primary">Lưu</b-button>
                </b-col>
              </b-row>
            </b-container>
               
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
// import { fetch } from "../utils/apiCaller";

export default {
  data() {
    return {};
  },
  // created() {
  //   // this.checkToken();
  //   this.fetchData();
  // },
  // watch: {
  //   isLoading: function(isLoad) {
  //     if (isLoad) {cols="5"(this.receivers);
  //       console.log(isLoad)
  //     }
  //   }
  // },
  methods: {
    // fetchData() {
    //   fetch('/info-customer/info-transfer-internal', 'GET')
    //     .then(res => {
    //       this.infoCustomer = res.data.customer;
    //       this.listCard = res.data.listCard;
    //       this.receivers = res.data.receivers;
    //       this.isLoading = true;
    //       this.isTokenExpired = false;
    //       console.log(res)
    //     })
    //     .catch(err => {ChangePassword
    //     })
    // },

    // appendListCard(listCard){
    //   listCard.map(card => {
    //     if (card.type == "pay") {
    //       this.selected = {
    //         amount: card.currentAmount,
    //         currency: card.currency
    //       };
    //     }
    //     this.options.push({
    //       value: { amount: card.currentAmount, currency: card.currency },
    //       text: card.cardNumber
    //     });
    //   });
    // },

    // appendReceivers(receivers) {
    //   receivers.map(receiver => {
    //     this.optionReceivers.push({
    //       value: { card: receiver.cardNumberReceiver },
    //       text: receiver.otherNameReceiver
    //     });
    //   });
    // },

    checkToken() {
      const token = JSON.parse(localStorage.getItem("token"));
      if (!token || token == "") {
        this.removeClientData();
      }
    },

    removeClientData() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style>
 #luu{
   margin-left: 25px;
 }
</style>