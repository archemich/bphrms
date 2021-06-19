<template>
  <header class="header">
    <h2 v-if="username" class="username">{{ username }}</h2>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["username"],
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
};
</script>
<style scoped>
.header {
  background: #f6f7f8;
  height: 64px;
  text-align: center;
}
.username {
  margin: 0;
}
</style>