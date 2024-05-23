<template>
  <div class="container">
    <h1>Index Page</h1>
    <br>
    <NuxtLink to="/user-admin/1">/user-admin/1</NuxtLink>
    <br>
    <NuxtLink to="/parent/child">/parent/child</NuxtLink>
    <br>
    <NuxtLink to="/about">/about</NuxtLink>
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
