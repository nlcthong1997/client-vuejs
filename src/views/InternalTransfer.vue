<template>
  <div>
    <b-card title="Chuyển tiền nội ngân hàng">
      <hr />
      <b-row>
        <b-col></b-col>
        <b-col cols="8">

          <div class="show-alert">
            <b-alert variant="danger" show>
              Lỗi kìa bạn ơi.
            </b-alert>
          </div>

          <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Tài khoản nguồn">
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </b-form-group>

          <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Số dư hiện tại">
            <b-row>
              <b-col cols="9">
                <b-form-input id="currentAmount" name="currentAmount" :value="selected.amount" readonly="readonly"></b-form-input>
              </b-col>
              <b-col>
                <b-form-input id="currency" name="currency" :value="selected.currency" readonly="readonly"></b-form-input>
              </b-col>
            </b-row>
          </b-form-group>

          <b-form-checkbox
            id="checkbox-1"
            v-model="checkbox_data"
            name="checkbox-1"
            value="checked"
            unchecked-value="not_checked"
            class="line-bar-1"
          >
            Người nhận mới
          </b-form-checkbox>

          <div v-if="checkbox_data == 'checked'">
            <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Tên gợi nhớ">
              <b-form-input id name></b-form-input>
            </b-form-group>

            <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Tài khoản nhận">
              <b-form-input id name></b-form-input>
            </b-form-group>
          </div>
          <div v-else>
            <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Tên gợi nhớ">
              <b-form-select v-model="selectedReceivers" :options="optionReceivers"></b-form-select>
            </b-form-group>

            <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Tài khoản nhận">
              <b-form-input id="cardNumberReceiver" :value="selectedReceivers.card" ></b-form-input>
            </b-form-group>
          </div>

          <div class="line-bar"></div>

          <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Số tiền chuyển">
            <b-form-input id name></b-form-input>
          </b-form-group>
          <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Phí chuyển tiền">
            <b-form-input id name></b-form-input>
          </b-form-group>
          <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Mã chuyển tiền">
            <b-row>
              <b-col cols="9">
                <b-form-input id="" name="" ></b-form-input>
              </b-col>
              <b-col>
                <b-button class="float-right" variant="success">Nhận</b-button>
              </b-col>
            </b-row>
          </b-form-group>
      
          <div class="line-bar-2"></div>

          <b-button class="float-right" variant="success">Chuyển tiền</b-button>

        </b-col>
        <b-col></b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { fetch } from "../utils/apiCaller";

export default {
  data() {
    return {
      selected: {},
      options: [],
      selectedReceivers: {},
      optionReceivers: [],
      checkbox_data: 'not_checked',
      isLoading: false,
      isTokenExpired: false,
      infoCustomer: {},
      listCard: [],
      receivers: []
    }
  },
  created() {
    // this.checkToken(); 
    this.fetchData();
  },
  watch: {
    isLoading: function(isLoad) {
      if (isLoad) {
        this.appendListCard(this.listCard);
        this.appendReceivers(this.receivers);
        console.log(isLoad)
      }
    }
  },
  methods: {
    fetchData() {
      fetch('/info-customer/info-transfer-internal', 'GET')
        .then(res => {
          this.infoCustomer = res.data.customer;
          this.listCard = res.data.listCard;
          this.receivers = res.data.receivers;
          this.isLoading = true;
          this.isTokenExpired = false;
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },

    appendListCard(listCard){
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

    appendReceivers(receivers) {
      receivers.map(receiver => {
        this.optionReceivers.push({
          value: { card: receiver.cardNumberReceiver },
          text: receiver.otherNameReceiver
        });
      });
    },

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