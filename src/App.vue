<template>
  <div id="app">
    <TheNavigation />
    <div class="main-content">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
import "./theme.css";
export default {
  name: "App",
  components: {
    TheNavigation
  }
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
