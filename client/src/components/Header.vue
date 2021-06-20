<template>
  <header class="">
    <nav class="navbar mb-5 p-4" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <div class="menu-icon is-large">
                        <i class="fas fa-bars is-size-4"></i>
                    </div>
                </a>

            </div>
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">

                </div>
                <div class="navbar-end is-large">
                    <div class="navbar-item has-dropdown is-hoverable">

                        <a class="navbar-link">
                            Меню
                        </a>

                        <div class="navbar-dropdown is-mobile ">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>

                            <hr class="navbar-divider">
                            <a class="navbar-item">
                                Выход
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </nav>

</header>
</template>

<script>
export default {
  name: "Header",
  props: ["username"],
  
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