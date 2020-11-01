<template>
  <div>
    <h1 v-once>Brukerer</h1>
    <div v-for="user in users" :key="user.id" class="list-group d-flex align-items-center">
      <TheUser :user="user" keep-alive />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TheUser from "../components/TheUser";
export default {
  name: "Users",
  components: {
    TheUser
  },
  data() {
    return { users: [] };
  },
  created() {
    // console.log("created");
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => (this.users = res.data))
      .catch(err => console.log(err));
  }
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {
  //   console.log("updated");
  // },
  // beforeDestroy() {
  //   console.log("beforeDestroy");
  // },
  // destroyed() {
  //   console.log("destroyed");
  // },
};
</script>

