<template>
	<div class="left-menu">
	  <b-card no-body header="Truy cập nhanh">
	    <b-list-group flush>
        <b-list-group-item>
          <router-link class="link" to="/home">Thông tin tài khoản</router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link class="link" to="/home/chuyen-tien-noi-ngan-hang">Chuyển tiền nội ngân hàng</router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link class="link" to="/home/chuyen-tien-lien-ngan-hang">Chuyển tiền liên ngân hàng</router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link class="link" to="/home/lich-su-giao-dich">Lịch sử giao dịch</router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link class="link" to="/home/quan-ly-nhac-no">Quản lý nhắc nợ</router-link>
        </b-list-group-item>
	    </b-list-group>
	  </b-card>
    <br>
    <b-card no-body header="Quản lý tài khoản">
	    <b-list-group flush>
        <b-list-group-item>
          <router-link class="link" to="/home/doi-mat-khau">Đổi mật khẩu</router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link class="link" to="/home/quen-mat-khau">Quên mật khẩu</router-link>
        </b-list-group-item>
        <b-list-group-item class="btn-logout link" @click="logOut">
          Thoát
        </b-list-group-item>
	    </b-list-group>
	  </b-card>
	</div>
</template>

<script>
	
export default {
  name: 'LeftMenu',
  methods: {
    logOut() {
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  }
}

</script>

<style scoped>
.btn-logout {
  color: #007bff;
}
.btn-logout:hover {
  text-decoration: underline;
  cursor: pointer;
}
.link {
  color: #28a745;
}
</style>