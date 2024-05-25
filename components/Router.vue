<template>
  <div class="container">
    <NuxtLink to="/user-admin/1">/user-admin/1</NuxtLink>
    <NuxtLink to="/parent">/parent</NuxtLink>
    <NuxtLink to="/parent/child">/parent/child</NuxtLink>
    <NuxtLink to="/about">/about</NuxtLink>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: {},
  setup (props) { }
};
</script>

<style lang="less"></style>
