<template>
    <div class="authForm">
        <form @submit="(event)=>{event.preventDefault()}">
            <input type="login" name="login" id="login" v-model="login">
            <input type="password" name="password" id="password" v-model="password">
            <button @click="$emit('submitForm', {login, password});" type="submit" class="login_button">Войти</button>
            <p>ИЛИ</p>
            <button class="loginEsia_button">Вход через ГосУслуги</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "AuthForm",
    data() {
        return {
            login: null,
            password: null,
        }
    }
}
</script>