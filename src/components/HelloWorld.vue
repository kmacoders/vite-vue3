<template>
  <div class="hello-world-container">
    <h1>{{ msg }}</h1>
    <button
      type="button"
      @click="count++"
    >
      count is: {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style lang="scss" scoped>
.hello-world-container {
  button {
    background: #25791e;
    border: none;
    padding: 10px 15px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
