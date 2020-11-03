<template>
  <div class="the-registration">
    TheRegistration
    <div v-if="unregisterdUsers">{{ unregisterdUsers.length}}</div>
    <div class="user" v-for="user in unregisterdUsers" :key="user.id">
      {{user.name}}
      <button v-on:click="$emit('register-user', user)">Meld opp</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheRegistration",
  props: ["unregisterdUsers"],
  methods: {
    log(message) {
      console.log(message);
    }
  }
};
</script>


<style scoped>
.the-registration {
  border: 1px solid gray;
  width: 450px;
  padding: 1rem;
  margin: 1rem;
}

.user {
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid gray;
  display: flex;
}

button {
  border: none;
  margin-left: auto;
}
</style>