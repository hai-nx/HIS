<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
  import { defineComponent, computed } from "vue"
  import { useRoute } from "vue-router"
  import { layouts } from "./utils/const"

  const route = useRoute()
  const layout = computed(() => route.meta.layout || layouts.default)
</script>
