<template>
  <div class="container">
    <h1>Child Page</h1>
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
