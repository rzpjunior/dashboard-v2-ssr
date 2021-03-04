<template>
  <div>
    <v-app
      :style="{
        'background-image': 'url(/img/bg_login.png)',
        'background-position': 'center',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        position: 'relative',
        'margin-top' : '-25px'
      }"
    >
      <v-main>
        <v-flex pb-3 class="text-xs-center pb-4" style="margin-top: 114px">
          <div class="text-center pb-4">
            <img src="/img/logo_login.png" />
          </div>
        </v-flex>
        <div style="height:8px"/>
        <v-card class="mx-auto rounded-xl card-login Heiti" max-width="380" flat>
            <v-container>
          <div class="d-flex justify-center" style="padding-top: 30px; font-size:20px">
            <span class="fs14">Dashboard</span> 
          </div>
          <div class="d-flex justify-center pr-md-8 pl-md-8" style="padding-top: 20px">
            <v-text-field
              solo
              flat
              rounded
              prepend-inner-icon="person_outline"
              label="Email"
              name="email"
              type="text"
              v-model="form.email"
              :error-messages="error.email"
            ></v-text-field>
          </div>
          <div
            class="d-flex justify-center pr-md-8 pl-md-8"
            style="margin-top: -12px"
          >
            <v-text-field
              solo
              flat
              rounded
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              label="Password"
              name="password"
              prepend-inner-icon="mdi-lock-outline"
              @keyup.enter="onSubmit"
              :error-messages="error.password"
              v-model="form.password"
            ></v-text-field>
          </div>
          <div class="d-flex justify-center pr-md-8 pl-md-8">
            <v-btn
              name="loggin-btn"
              block
              :disabled="validation"
              elevation="0"
              style="background-color: #768f9c"
              class="rounded-xl no-caps white--text"
              @click="onSubmit"
              ><span style="font-size:16px">Login</span></v-btn
            >
          </div>
          <div
            style="text-align: center; padding-top: 15px; padding-bottom: 15px"
          >
            <p>
              <a
                style="color: #768f9c; font-size: 13px"
                target="_blank"
                href="https://j84muodq.paperform.co/"
                >Forget Password?</a
              >
            </p>
          </div>
          </v-container>
        </v-card>
      </v-main>
    </v-app>
  </div>
</template>
<style scoped>
.card-login {
  background: linear-gradient(
    172.75deg,
    #e0f0cc 5.64%,
    rgba(240, 251, 226, 0.25) 94.36%
  );
  mix-blend-mode: normal;
  border-radius: 30px;
  border-style: 0;
}
</style>

<script>
import AuthService from "../services/AuthService.js";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: {},
      show: false,
    };
  },
  mounted() {
    
  },
  computed: {
      validation() {
          if (this.form.email.length>0 && this.form.password.length>0) {
            return false
          } else {
            return true
          }
      }
  },
  methods: {
    async onSubmit() {
      try {
        const response = await AuthService.login(this.form);
        console.log(response, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAKONTOL')
        console.log(response.data)
        this.msg = response.msg;
        const token = response.data.token;
        const staff = response.data.staff;
        console.log(token)
        console.log(staff)
        this.$store.dispatch("login", { token, staff });
        const priv = await this.$http
          .get("/permission/privilege")
          .then((response) => response.data);
        // localStorage.setItem("priv", priv.data);
        // console.log(priv)
        this.$router.push("/welcome");
        console.log("BISA ANJING")
        // window.location.reload("/test")
      } catch (error) {
        console.log(error, "ah anjing");
      }
    },
  },
};
</script>