<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import { apolloClient } from './graphql/client'
import { DefaultApolloClient } from '@vue/apollo-composable'

export default defineComponent({
  name: 'App',
  setup() {
    provide(DefaultApolloClient, apolloClient)
  }
})
</script>
