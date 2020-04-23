<template>
  <div>
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-card class="card-login">
            <b-form @submit="onSubmit">
              <div class="text-center">
                <h2 class="title-login">Đăng nhập</h2>
              </div>

              <b-form-group
                id="input-group-1"
                label="Tên đăng nhập:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.username"
                  required
                  placeholder="Tên đăng nhập"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Mật khẩu:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  required
                  placeholder="Mật khẩu"
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Xác nhận"
                label-for="input-3"
              >
                <VueRecaptcha
                  sitekey="6LcebtsUAAAAAE7Geu4ZevovW18-nuGr3jI4ZVkY"
                  @verify="onVerify"
                  @expired="onExpired"
                />
              </b-form-group>
              <b-button type="submit" block variant="success"><h5>Đăng nhập</h5></b-button>

            </b-form>
          </b-card>  
        </b-col>
        <b-col></b-col>
      </b-row>
    </div>
</template>

<script>
import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';

export default {
  components: { VueRecaptcha },
  data() {
      return {
          form: {
            username: '',
            password: '',
          },
          recaptcha: ''
      }
  },
  created() {

  },
  mounted() {

  },
  computed: {

  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.login(this.form, this.recaptcha);
    },
    login(data, recaptcha) {
      axios
        .post('http://localhost:3001/auth/login/', data, { headers: { "x-capcha": recaptcha } })
        .then(res => {
            if (res.data.accessToken && res.data.refreshToken) {
              localStorage.setItem('user', JSON.stringify(res.data));
              this.$router.push('/home');
            } else {
              localStorage.removeItem('user');
              this.$router.push('/login');
            }
        })
        .catch(err => {
          console.log(err);
        })
    },
    onVerify (response) {
      console.log(response);
      this.form.recaptcha = response;
    },
    onExpired () {
      console.log('Expired')
    }
  }
}
</script>

<style scoped>
  .card-login {
    margin-top : 50px;
    border-color: #28a745
  }
</style>