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
                label="Nhập mã:"
                label-for="input-3"
              >
                <b-row>
                  <b-col>
                    <b-form-input
                      id="input-3"
                      v-model="form.confirm"
                      required
                      placeholder="Mã xác nhận"
                    ></b-form-input>  
                  </b-col>
                  <b-col>
                    <h3><b-badge variant="secondary">LKJGLDS</b-badge></h3>
                  </b-col>
                </b-row>
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
            }
        }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        this.login(this.form);
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
          		this.$router.push('/');
              }
          })
          .catch(err => {
          	console.log(err);
          })
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