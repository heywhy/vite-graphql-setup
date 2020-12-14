import { defineComponent, h } from 'vue'
import { RouterView } from 'vue-router'

export const App = defineComponent(() => {
  return () => h(RouterView)
})
