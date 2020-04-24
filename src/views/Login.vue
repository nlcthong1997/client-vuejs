<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col>
        <div class="show-alert">
          <b-alert variant="danger" v-if="showError" show>{{ contentError }}</b-alert>
        </div>
        <b-card class="card-login">
          <b-form @submit="onSubmit">
            <div class="text-center">
              <h2 class="title-login">Đăng nhập</h2>
            </div>

            <b-form-group id="input-group-1" label="Tên đăng nhập:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.username"
                required
                placeholder="Tên đăng nhập"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Mật khẩu:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.password" required placeholder="Mật khẩu"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Xác nhận" label-for="input-3">
              <VueRecaptcha
                sitekey="6LcebtsUAAAAAE7Geu4ZevovW18-nuGr3jI4ZVkY"
                @verify="onVerify"
                @expired="onExpired"
              />
            </b-form-group>
            <b-button type="submit" block variant="success">
              <h5>Đăng nhập</h5>
            </b-button>
          </b-form>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import VueRecaptcha from "vue-recaptcha";

export default {
  props: {
    loggedLv1: { type: Boolean, default: false }
  },
  components: { VueRecaptcha },
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      recaptcha: "",
      token: null,
      isLoading: false,
      showError: false,
      contentError: ""
    };
  },
  created() {
    localStorage.removeItem("token");
  },
  watch: {
    isLoading: function(isLoad) {
      this.redirect(isLoad && this.token);
    }
  },
  mounted() {},
  computed: {},
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.recaptcha != "") {
        this.login(this.form, this.recaptcha);
      } else {
        this.onShowError("Vui lòng đánh dấu vào capcha.");
      }
    },

    async login(data, recaptcha) {
      await axios
        .post("http://192.168.100.7:3001/auth/login", data, {
          headers: {
            "x-capcha": recaptcha,
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          if (res.data.accessToken && res.data.refreshToken) {
            this.isLoading = true;
            this.token = res.data;
          }
        })
        .catch(err => {
          this.isLoading = true;
          console.clear();
          console.error("Error login: ", err);
        });
    },

    redirect(isCheck) {
      if (isCheck) {
        localStorage.setItem("token", JSON.stringify(this.token));
        this.$emit("eventLoggedLv1", { status: true });
        this.$router.push("/home");
      } else {
        this.onShowError("Vui lòng kiểm tra lại tài khoản hoặc mật khẩu.");
      }
    },

    onShowError(message) {
      this.showError = true;
      this.contentError = message;
      setTimeout(() => {
        this.showError = false;
        this.contentError = "";
      }, 3000);
    },

    onVerify(response) {
      this.recaptcha = response;
    },

    onExpired() {
      console.error("Capcha expired.");
    }
  }
};
</script>

<style scoped>
.card-login {
  margin-top: 50px;
  border-color: #28a745;
}
.show-alert {
  margin-top: 50px;
  height: 50px;
}
</style>
