<template>
  <div class="container">
    <NuxtLayout name="custom">
      <p>
        <i><label>group：</label>{{ $route.params.group }}</i>
        <i><label>id：</label>{{ $route.params.id }}</i>
      </p>
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
