<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="author"> By {{ author.name }} {{ author.age }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { Author } from '@/types/Author';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const author: Author = reactive({
      name: 'Huwng',
      age: 30,
    });

    return {
      author,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
