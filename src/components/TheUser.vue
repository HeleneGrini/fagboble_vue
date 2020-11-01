<template>
  <div class="list-group-item list-group-item-action flex-column align-items-start w-50">
    <router-link :to="{name: 'User', params: {id: user.id}}">
      <h5 class="mb-1">{{ user.name }}</h5>
      <p class="mb-1">{{ user.username }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TheUser",
  props: ["user"]
};
</script>
