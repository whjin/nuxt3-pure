<template>
  <div class="main-container">
    <h3>Main Component</h3>
    <div class="main-list" v-for="todo in todos.data" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" />
      <strong>{{ todo.title }}</strong>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, toRaw } from "vue";

const { data: todos } = await useFetch('/api/todo');

</script>

<style lang="less">
@import "../assets/less/index.less";
</style>
