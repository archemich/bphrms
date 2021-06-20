<template>
  <div id="wrap">
    <Header />
      <main>
    <div class="section">
        <div class="container-980">
            <!--            Табы -->
            <div class="columns is-centered">
                <div class="column is-8-desktop">
                    <div class="box">
                        <h2 class="title has-text-centered">Войти в систему</h2>
                        <div class="tabs is-centered is-large is-fullwidth">
                            <!--            https://bulma.io/documentation/components/tabs/    -->
                            <ul>
                                <li class="is-active"><a>Я пациент</a></li>
                                <li class=""><a>Я врач</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <!--            Форма -->
            <div class="columns is-centered">
                <div class="column is-12-mobile is-8-desktop">
                    <div class="box">
                        <form @submit="(event)=>{event.preventDefault()}">
                            <div class="field">
                                <label class="label is-large" for="login">Логин</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input is-success is-large" type="text" placeholder="Text input"
                                           v-model="login" id="login">
                                    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
                                    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
                                </div>
                                <p class="help is-success">Логин свободен</p>
                            </div>

                            <div class="field">
                                <label class="label is-large" for="password">Пароль</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input is-danger is-large" type="password" placeholder="Email input"
                                          v-model="password" id="password">
                                    <span class="icon is-small is-left">
      <i class="fas fa-unlock-alt"></i>
    </span>
                                    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
                                </div>
                                <!--                        <p class="help is-danger">Па</p>-->
                            </div>

                            <div class="field">
                                <div class="control ">
                                    <label class="checkbox is-size-4 ">
                                        <input type="checkbox">
                                        Я согласен с условиями использования и ознакомлен с <a href="#">законом о защите
                                        персональных данных</a>
                                    </label>
                                </div>
                            </div>
                            <div class="field is-grouped is-grouped-centered my-6">
                                <div class="control">
                                    <button @click.prevent="loginUser" class="button is-success is-large">Войти</button>
                                </div>
                            </div>
                            <hr class="mt-6">
                            
                            <h2 class="subtitle has-text-centered my-6 is-size-3">ИЛИ</h2>

                            <div class="field is-grouped is-grouped-centered my-6">
                                <div class="control">
                                    <button class="button is-link is-large">Войти через <span
                                            class="has-text-weight-semibold ml-2">ГосУслуги</span></button>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>


        </div>
    </div>

</main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import axios from "axios";
import VueRouter from 'vue-router';

export default {
  name: "App",
  components: {
    Header,
  },

  data() {
    return {
      user: null,
      isDoctorSet: true,
      wrongPassword: false,
      login: null,
      password: null
    };
  },

  methods: {
      loginUser() {
      let role = this.isDoctorSet ? "doctor" : "patient";
      let login = this.login;
      let password = this.password;
      console.log(login);
      axios.post( "https://bphrmsapi.azurewebsites.net/auth/login", {login,password,role})
      .then ((res) => {
        console.log(res);
        this.$router.push('/');
         

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
@import '../../front/bulma/css/bulma.css';
@import '../../front/css/style.css';

</style>
