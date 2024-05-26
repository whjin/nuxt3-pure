<template>
  <div class="router-container">
    <NuxtLink to="/user-admin/1">/user-admin/1</NuxtLink>
    <NuxtLink to="/parent">/parent</NuxtLink>
    <NuxtLink to="/parent/child">/parent/child</NuxtLink>
    <NuxtLink to="/about">/about</NuxtLink>
    <p class="refresh-button" @click="refreshPage">刷新</p>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

function refreshPage () {
  window.location.reload();
}
</script>

<style lang="less">
@import url(../assets/less/index.less);
</style>
