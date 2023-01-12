<script setup lang="ts">
import HomePage from "@/components/templates/HomePage.vue";
import QuestionPage from "@/components/templates/QuestionPage.vue";
import { ref } from "vue";
import type { Question } from "@/interfaces/question";
import { questions } from "@/data/questions";

enum PagesEnum {
  HomePage = "homePage",
  QuestionPage = "questionPage",
}

const currentPage = ref(PagesEnum.HomePage);
const selectedQuestion = ref<Question>();

function selectQuestion(index: number) {
  selectedQuestion.value = questions[index];
  showQuestionPage();
}

function showHomePage() {
  currentPage.value = PagesEnum.HomePage;
}

function showQuestionPage() {
  currentPage.value = PagesEnum.QuestionPage;
}
</script>

<template>
  <HomePage v-if="currentPage === 'homePage'" @select="selectQuestion" />
  <QuestionPage
    v-if="currentPage === 'questionPage'"
    :question="selectedQuestion"
    @back="showHomePage"
  />
</template>

<style scoped lang="scss"></style>
