<template>
  <div class="footer-container">
    <h3>Footer Component</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const { $hello } = useNuxtApp();
const text = $hello();
</script>

<style lang="less">
@import "../assets/less//index.less";
</style>
