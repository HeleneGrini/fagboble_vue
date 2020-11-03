<template>
  <div class="the-registration">
    TheRegistration
    <div v-if="unregisterdUsers">{{ unregisterdUsers.length}}</div>
  </div>
</template>

<script>
export default {
  name: "TheRegistration",
  props: ["unregisterdUsers"]
};
</script>


<style scoped>
.the-registration {
  border: 1px solid gray;
  width: 450px;
  padding: 1rem;
  margin: 1rem;
}
</style>