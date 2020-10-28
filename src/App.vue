<template>
  <div id="app">
    <Nav />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import "./theme.css";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.main-content {
  padding-top: 100px;
}
</style>
