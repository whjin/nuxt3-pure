<template>
  <div class="container">
    <NuxtLayout name="custom">
      <template #title>
        <h3>这是一个标题</h3>
      </template>
      <template #content>
        <p>这是一段文本...</p>
      </template>
    </NuxtLayout>
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
