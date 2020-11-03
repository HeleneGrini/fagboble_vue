<template>
  <div class="the-registrations">
    TheRegistrations
    <div v-if="registrations">{{ registrations.length}}</div>
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
</style>