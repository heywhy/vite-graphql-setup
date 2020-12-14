<template>
  <div data-testid="container" v-if="result">
    testing is: {{ result?.exampleQuery.testing }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { ExampleQuery } from '../src/graphql/queries/sample'

export default defineComponent({
  setup() {
    const { result } = useQuery(ExampleQuery)

    return { result }
  },
})
</script>
