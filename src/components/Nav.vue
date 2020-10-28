<template>
  <header>
    <nav class="position-fixed navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Fagboble</a>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <router-link class="nav-item nav-link" to="/">
          Home
        </router-link>
        <router-link class="nav-item nav-link" to="/brukere"
          >Brukere</router-link
        >
      </div>

      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control-sm mr-sm-2"
          type="text"
          placeholder="Search"
        />
        <button class="btn btn-sm btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",
};
</script>
<style scoped>
.navbar {
  left: 0;
  right: 0;
  z-index: 10;
}
.nav-item {
  color: white;
}
</style>
