<template>
  <div class="container">
    <p>通用布局页，default.vue</p>
    <NuxtLink to="/">/home</NuxtLink>
    <slot></slot>
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
