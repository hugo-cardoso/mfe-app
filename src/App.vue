<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import { LayoutsEnum } from "./types";

const route = useRoute();

const layout = computed(() => {
  if (!route.meta.layout) return DefaultLayout;

  switch (route.meta.layout) {
    case LayoutsEnum.Default:
      return DefaultLayout;
    default:
      return DefaultLayout;
  }
});
</script>

<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<style scoped></style>
