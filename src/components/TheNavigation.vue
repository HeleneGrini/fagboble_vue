<template>
  <header>
    <nav class="nav">
      <div class="nav-start">
        <div class="nav-logo" href="#">Fagboble</div>
        <div class="nav-links">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/brukere">Brukere</router-link>
          <router-link class="nav-link" :to="{name: 'registration'}">Meld opp</router-link>
        </div>
      </div>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control-sm mr-sm-2" type="text" placeholder="Search" />
        <button class="btn btn-sm btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheNavigation"
};
</script>


<style scoped>
.nav {
  position: fixed;
  background-color: gray;

  left: 0;
  right: 0;
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
}
.nav-logo {
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-right: 1rem;
}
.nav-links,
.nav-start {
  display: flex;
  justify-content: center;
}

.nav-link {
  color: white;
}
.router-link-exact-active {
  text-decoration: underline;
}
</style>
