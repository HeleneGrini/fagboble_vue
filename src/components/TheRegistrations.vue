<template>
  <div class="the-registrations">
    TheRegistrations
    <div v-if="registrations">{{ registrations.length}}</div>
    <div class="user" v-for="user in registrations" :key="user.id">
      {{user.name}}
      <button v-on:click="$emit('unregister-user', user)">Meld av</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheRegistrations",
  props: ["registrations"]
};
</script>
<style scoped>
.the-registrations {
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