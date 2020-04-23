<template>
  <div class="chuyen-tien-noi-ngan-hang">
    <b-card title="Thông tin tài khoản">
      <div class="info">
        Kính chào quý khách
        <br>
        <br>
      </div>
			<div class="content">
        <b-table hover :items="items"></b-table>
      </div>
		</b-card>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        items: [
          { 'Thông tin': 'Tên tài khoản', 'Nội dung': '' },
          { 'Thông tin': 'Số tài khoản', 'Nội dung': '' },
          { 'Thông tin': 'Số dư hiện tại', 'Nội dung': '' },
          { 'Thông tin': 'Loại tiền tệ', 'Nội dung': '' },
        ]
        
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        let tokenStorage = JSON.parse(localStorage.getItem("token"));
        if (!tokenStorage) {
          this.removeClientData();
          this.$router.push("/");
        }
        axios
            .get("http://192.168.100.7:3001/info-customer", {
              headers: {
                "x-access-token": tokenStorage.accessToken,
              },
            })
            .then((res) => {
              this.appendData(res.data.customer);
            })
            .catch((err) => {
              if (err.statusCode == 401) {
                this.getNewToken(tokenStorage);
                this.fetchData();
              }      
            });
      },
      appendData(data) {
        this.items[0]["Nội dung"] = data.fullName;
        this.items[1]["Nội dung"] = data.cardNumber;
        this.items[2]["Nội dung"] = data.currentAmount;
        this.items[3]["Nội dung"] = data.currency;
      },
      getNewToken (token) {
        console.log('token-getNewToken:', token);
        axios
            .put("http://192.168.100.7:3001/auth/login", token)
            .then((res) => {
              console.log('getNewToken: ', res);
              localStorage.setItem('token', JSON.stringify(res.data));
            })
            .catch((err) => {
              console.log('err-getNewToken: ', err);
              this.removeClientData();
              this.$router.push("/login");
            });
      },
      removeClientData() {
        localStorage.removeItem("token");
      }
    }
  }
</script>

<style>
</style>