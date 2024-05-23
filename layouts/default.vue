<template>
  <div class="container">
    <p>通用布局页，default.vue</p>
    <slot></slot>
    <NuxtLink to="/">/home</NuxtLink>
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
