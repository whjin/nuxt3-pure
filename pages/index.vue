<template>
  <div class="container">
    <NuxtLayout name="home"></NuxtLayout>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  layout: false,
  props: {},
  setup (props) { },
};
</script>

<style lang="less"></style>
