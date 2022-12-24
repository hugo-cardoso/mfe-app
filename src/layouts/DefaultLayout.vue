<script lang="ts" setup>
import MicroFrontEnd from "../components/MicroFrontEnd.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function changeRoute(path: string) {
  router.push(path);
}
</script>

<template>
  <MicroFrontEnd
    id="header"
    urlScript="https://hk-mfe-assets.s3.sa-east-1.amazonaws.com/header/main.js"
    :props="{
      changeRoute,
    }"
  />
  <div class="mb-4"></div>
  <slot></slot>
</template>
