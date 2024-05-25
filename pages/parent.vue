<template>
  <div class="container">
    <NuxtLayout>
      <h1>Parent/Child Page</h1>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
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
