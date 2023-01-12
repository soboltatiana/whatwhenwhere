<script setup lang="ts">
import HomePage from "@/components/templates/HomePage.vue";

function selectQuestion(index: number) {
  console.log(index);
}
</script>

<template>
  <HomePage @select="selectQuestion" />
</template>

<style scoped lang="scss"></style>
