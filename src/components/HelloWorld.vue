<template>
  <h1 class="text-5xl font-bold my-3">{{ msg }}</h1>
  <button
    data-testid="count-btn"
    class="bg-gray-300 rounded p-2"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <p class="mt-3">
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    }
  },
})
</script>
