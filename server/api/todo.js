const todos = [
  { id: 1, title: 'nuxt3', completed: true },
  { id: 2, title: 'vue3', completed: true },
];

export default () => {
  return {
    code: 200,
    data: todos
  };
};