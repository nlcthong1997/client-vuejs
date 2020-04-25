<template>
  <div>
    <b-card title="Chuyển tiền trong ngân hàng">
      <hr />
      <b-row class="form-transfer">
        <b-col></b-col>
        <b-col cols="8">

          <b-form-group
            id=""
            label-cols-sm="4"
            label-cols-lg="3"
            label="Tài khoản nguồn"
          >
            <b-form-input id="cardNumber" name="cardNumber"></b-form-input>
          </b-form-group>

          <b-form-group
            id=""
            label-cols-sm="4"
            label-cols-lg="3"
            label="Số dư hiện tại"
          >
            <b-form-input id="currentAmount" name="currentAmount"></b-form-input>
          </b-form-group>

            <div class="line-bar"></div>

            <b-form-group
            id=""
            label-cols-sm="4"
            label-cols-lg="3"
            label="Tài khoản nhận"
          >
            <b-form-input id="" name=""></b-form-input>
          </b-form-group>

          <b-form-group
            id=""
            label-cols-sm="4"
            label-cols-lg="3"
            label="Số tiền chuyển"
          >
            <b-form-input id="" name=""></b-form-input>
          </b-form-group>

          <div class="line-bar"></div>

            <b-form-group
            id=""
            label-cols-sm="4"
            label-cols-lg="3"
            label="Phí chuyển tiền"
          >
            <b-form-input id="" name=""></b-form-input>
          </b-form-group>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-transfer {
    margin-top: 2em;
}
.line-bar {
    margin-top: 3em;
    margin-bottom: 3em;
}
</style>