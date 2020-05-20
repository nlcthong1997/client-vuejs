<template>
  <div>
    <b-card title="Lịch sử giao dịch của bạn">
      <hr />
     <b-table striped hover :items="items" :fields="fields"></b-table>
    </b-card>
  </div>
</template>

<script>
// import { fetch } from "../utils/apiCaller";

export default {
  data() {
    return {
     fields: [
          {
            key: 'trang-thai',
            label: 'Trạng thái',
            sortable: true
          },
          {
            key: 'nguoi-giao-dich',
            label: 'Người giao dịch',
            sortable: true
          },
          {
            key: 'so-tien',
            label: 'số tiền (usd)',
            sortable: true,
          },
          {
            key: 'thoi-gian',
            label: 'thời gian',
            sortable: true,
          }
        ],
        items: [
          { "trang-thai": "chuyển", "so-tien": 40, "nguoi-giao-dich": 'Dickerson', "thoi-gian": '2011/12/12 34:12:12' },
          { "trang-thai": "nhận", "so-tien": 21, "nguoi-giao-dich": 'Larsen', "thoi-gian": '2019/12/12 34:12:12' },
          { "trang-thai": "chuyển", "so-tien": 89, "nguoi-giao-dich": 'Geneva', "thoi-gian": '2000/12/12 34:12:12' },
          { "trang-thai": "nhận", "so-tien": 38, "nguoi-giao-dich": 'Jami', "thoi-gian": '2022/12/12 34:12:12' }
        ],
    }
  },
  // created() {
  //   // this.checkToken(); 
  //   this.fetchData();
  // },
  // watch: {
  //   isLoading: function(isLoad) {
  //     if (isLoad) {
  //       this.appendListCard(this.listCard);
  //       this.appendReceivers(this.receivers);
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
    //     .catch(err => {
    //       console.log(err)
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
      if (!token || token == '') {
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
.form-transfer {
  margin-top: 2em;
}
.line-bar-1 {
  margin-top: 3em;
  margin-bottom: 1em;
}
.line-bar-2 {
  margin-top: 2em;
  margin-bottom: 1em;
}
.line-bar {
  margin-top: 3em;
  margin-bottom: 3em;
}
.show-alert {
  height: 65px;
}
</style>