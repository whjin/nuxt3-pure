<template>
  <div class="header-container">
    <h3>Header Component</h3>
    <div class="wrapper">
      <button @click="countMinus">Minus</button>
      <span>{{ counter }}</span>
      <button @click="countPlus">Plus</button>
      <button @click="countReset">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRaw } from "vue";

const counter = useCounter();

function countMinus () {
  counter.value--;
}

function countPlus () {
  counter.value++;
}

function countReset () {
  counter.value = 1;
}
</script>

<style lang="less">
@import "../assets/less/index.less";
</style>
