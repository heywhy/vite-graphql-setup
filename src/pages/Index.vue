<template>
  <img class="inline-block" alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite + Vue Apollo + Tailwind" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
})
</script>
