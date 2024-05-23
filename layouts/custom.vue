<template>
  <div class="container">
    <h3>自定义样式布局</h3>
    <slot name="title"></slot>
    <slot name="content"></slot>
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
