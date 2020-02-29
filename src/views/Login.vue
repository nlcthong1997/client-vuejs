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
                <div id="el_ggReCaptCha"></div>
              </b-form-group>
              <input type="hidden" id="respond_recaptcha"/>
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

export default {
    data() {
        return {
            form: {
              username: '',
              password: '',
              recaptcha: '',
            }
        }
    },
    mounted() {
    },
    computed: {
    },
    methods: {
      onSubmit(e) {
        e.preventDefault();
        this.setCaptchaVal();
        console.log(this.form.recaptcha);
        this.login(this.form);
      },
      login(data) {
        axios
          .post('http://localhost:5000/api/login/', data)
          .then(res => {
            console.log("tai sao", res)
              if (res.data.authenticated) {
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
      setCaptchaVal() {
        this.form.recaptcha = document.getElementById('respond_recaptcha').value;
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