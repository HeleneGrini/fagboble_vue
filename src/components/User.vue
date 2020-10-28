<template>
  <div
    class="list-group-item list-group-item-action flex-column align-items-start w-50"
  >
    <h5 class="mb-1">{{ user.name }}</h5>
    <p class="mb-1">
      {{ user.username }}
    </p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["user"],
};
</script>
