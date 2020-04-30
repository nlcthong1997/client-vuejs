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
                <b-form-input id="currentAmount" name="currentAmount" value="5000" readonly="readonly"></b-form-input>
              </b-col>
              <b-col>
                <b-form-input id="currency" name="currency" value="VND" readonly="readonly"></b-form-input>
              </b-col>
            </b-row>
          </b-form-group>

          <div class="line-bar"></div>

          <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Tài khoản nhận">
            <b-form-input id name></b-form-input>
          </b-form-group>

          <b-form-group id label-cols-sm="4" label-cols-lg="3" label="Số tiền chuyển">
            <b-form-input id name></b-form-input>
          </b-form-group>

          <div class="line-bar"></div>

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
      
          <div class="line-bar"></div>

          <b-button class="float-right" variant="success">Chuyển tiền</b-button>

        </b-col>
        <b-col></b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
    }
  },
  created() {
    this.checkToken();
  },
  methods: {
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
.line-bar {
  margin-top: 3em;
  margin-bottom: 3em;
}
.show-alert {
  height: 65px;
}
</style>