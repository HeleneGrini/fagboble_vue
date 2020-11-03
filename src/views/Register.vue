<template>
  <div>
    <h1 v-once>Registrer</h1>
    <div class="register">
      <TheRegistration :unregisterdUsers="unregisterdUsers" />
      <TheRegistrations :registrations="registrations" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TheRegistration from "../components/TheRegistration";
import TheRegistrations from "../components/TheRegistrations";
export default {
  name: "Register",
  components: {
    TheRegistration,
    TheRegistrations
  },
  data() {
    return { users: [], registrations: [] };
  },
  computed: {
    unregisterdUsers() {
      return this.users.filter(
        user => !this.registrations.find(u => u.id === user.id)
      );
    }
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => (this.users = res.data))
      .catch(err => console.log(err));
  }
};
</script>
<style scoped>
.register {
  display: flex;
  justify-content: center;
  min-height: 200px;
}
</style>