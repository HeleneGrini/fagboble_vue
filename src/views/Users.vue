<template>
  <div class="py-4">
    <h1>Brukerer</h1>

    <div
      v-for="user in users"
      v-bind:key="user.id"
      class="list-group d-flex align-items-center"
    >
      <User v-bind:user="user" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import User from "../components/User";
export default {
  name: "Users",
  components: {
    User,
  },
  data() {
    return { users: [] };
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => (this.users = res.data))
      .catch((err) => console.log(err));
  },
};
</script>
