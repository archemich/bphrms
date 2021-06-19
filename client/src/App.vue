<template>
  <div id="wrap">
    <Header />
    <h1>Авторизация</h1>
    <hr>
    <h2>Вход/Регистрация</h2>
    <div class="row">
      <button @click="isDoctorSet = true">Я врач</button>
      <button @click="isDoctorSet = false">Я пациент</button>
      </div>
      <AuthForm @submitForm = "loginUser"/>
      <p v-if="wrongPassword">Wrong login or password</p>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AuthForm from "./components/AuthForm.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    AuthForm
  },
  data() {
    return {
      user: null,
      isDoctorSet: true,
      wrongPassword: false
    };
  },

  methods: {
      loginUser(event) {
      let role = this.isDoctorSet ? "doctor" : "patient";
      let login = event.login;
      let password = event.password;
      axios.post(process.env.VUE_APP_API_URL + "auth/login", {login,password,role})
      .then ((res) => {
        console.log(res);
        })
      .catch(() => {
        this.wrongPassword = true;
        return;

      })
  

    }
  },

  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL + "users/patients")
      .then((res) => {
        this.user = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
