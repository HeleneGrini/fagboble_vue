<template>
  <div>
    <h1>Bruker</h1>
    <div v-if="!user">loading</div>
    <div class="user-details" v-if="user">
      <div>Name: {{user.name}}</div>
      <div>Username: {{user.username}}</div>
      <div>ID: {{userId}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  data() {
    return {
      userId: this.$route.params.id,
      user: undefined
      //   loading: !this.user
    };
  },
  //   computed: {
  //     loading() {
  //       return !this.user;
  //     }
  //   },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
      .then(res => (this.user = res.data))
      .catch(err => console.log(err));
  }
};
</script>


<style scoped>
.user-details {
  font-size: 20px;
}
</style>