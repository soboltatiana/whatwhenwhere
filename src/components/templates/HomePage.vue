<script setup lang="ts">
import { BImg } from "bootstrap-vue-3";
import type { Question } from "@/interfaces/question";
defineProps<{ questions: Array<Question> }>();
</script>

<template>
  <div class="wrapper">
    <div class="left-panel">
      <BImg src="logo.png" />
    </div>
    <div class="right-panel">
      <div
        v-for="(question, index) in questions"
        :key="index"
        :class="{
          ['question-card']: true,
          ['question-card--disabled']: !question.active,
        }"
        @click="$emit('select', index)"
      >
        {{ index + 1 }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px;
  width: 100%;
  gap: 30px;
}

.right-panel {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}

.question-card {
  height: 200px;
  color: white;
  font-size: 64px;
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #354b60;
  }

  &:active {
    background-color: #3e5870;
  }

  &--disabled {
    background-color: gray;

    &:hover {
      background-color: gray;
    }

    &:active {
      background-color: gray;
    }
  }
}
</style>
