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
                <div id="html_ggcaptcha"></div>
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

export default {
    data() {
        return {
            form: {
              username: '',
              password: '',
              confirm: ''
            },
            captcha_site_key: '6LcebtsUAAAAAE7Geu4ZevovW18-nuGr3jI4ZVkY',
            rcapt_id: 0
            // ggrecaptcha: function onloadCallback()
        }
    },
    mounted() {
      this.onloadCallback();
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
  
        // if (grecaptcha.getResponse(onloadCallback.call) == "") {
        //     alert("You can't proceed!");
        // } else {
        //     alert("Thank you");
        // }
        // this.login(this.form);
        // console.log(onloadCallback);
        
      },
      login(data) {
        axios
          .post('http://localhost:5000/api/login/', data)
          .then(res => {
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
      onloadCallback() {
        grecaptcha.render('html_ggcaptcha', {
          'captcha_site_key' : '6LcebtsUAAAAAE7Geu4ZevovW18'
        });
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