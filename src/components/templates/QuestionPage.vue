<script setup lang="ts">
import { Question } from "@/interfaces/question";
import { ref } from "vue";
defineProps<{ question: Question }>();

const questionVisible = ref(false);
const answerVisible = ref(false);
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <BButton class="back" variant="light" @click="$emit('back')"
        >Înapoi</BButton
      >
      <h1 class="title">{{ question.author.name }}</h1>
    </div>
    <div class="content">
      <div class="left">
        <BImg :src="question.author.picture"></BImg>
      </div>
      <div class="right">
        <BCard class="description">
          {{ question.description }}
        </BCard>
        <BButton
          class="mt-5"
          variant="outline-primary"
          @click="questionVisible = !questionVisible"
          >Întrebare</BButton
        >
        <BCollapse id="question" :visible="questionVisible">
          <p class="big-text">{{ question.question }}</p>
        </BCollapse>
        <BButton
          class="mt-5"
          variant="outline-success"
          @click="answerVisible = !answerVisible"
          >Răspuns</BButton
        >
        <BCollapse id="question" :visible="answerVisible">
          <p class="big-text">{{ question.answer }}</p>
        </BCollapse>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.header {
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .back {
    position: absolute;
    left: 40px;
    top: 20px;
  }
}

.content {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding: 40px;
  gap: 40px;

  .left {
    width: 35%;

    img {
      width: 100%;
    }
  }

  .right {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: start;

    .description {
      font-size: 28px;
    }

    .big-text {
      margin-top: 30px;
      font-size: 36px;
    }
  }
}
</style>
