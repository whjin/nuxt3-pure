<template>
  <div class="container">
    <h1>User Page</h1>
    <p>group: {{ $route.params.group }}</p>
    <p>id: {{ $route.params.id }}</p>
    <NuxtLink to="/">/home</NuxtLink>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: {},
  setup (props) { },
};
</script>

<style lang="less"></style>
