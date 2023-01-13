<script setup lang="ts">
import { Question } from "@/interfaces/question";
import { computed, ref } from "vue";
const props = defineProps<{ question: Question }>();

const premiseVisible = ref(false);
const questionVisible = ref(false);
const answerVisible = ref(false);

const questionImagesClass = computed(() => ({
  images: props.question.pictures?.length === 1,
  "images-grid": props.question.pictures?.length > 1,
}));
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
        <BButton
          class="mt-5"
          variant="outline-secondary"
          @click="premiseVisible = !premiseVisible"
          >Premisă</BButton
        >
        <BCollapse id="premise" :visible="premiseVisible">
          <div>
            <BCard class="mt-3" v-if="question.description">
              <p class="description">{{ question.description }}</p>
            </BCard>
            <div :class="questionImagesClass" v-if="question.pictures">
              <BImg
                v-for="(picture, index) in question.pictures"
                :key="index"
                thumbnail="true"
                :src="picture"
                sizes=""
              />
            </div>
          </div>
        </BCollapse>
        <BButton
          class="mt-5"
          variant="outline-primary"
          @click="questionVisible = !questionVisible"
          >Întrebare</BButton
        >
        <BCollapse id="question" :visible="questionVisible">
          <p class="mt-3 big-text">{{ question.question }}</p>
        </BCollapse>
        <BButton
          class="mt-5"
          variant="outline-success"
          @click="answerVisible = !answerVisible"
          >Răspuns</BButton
        >
        <BCollapse id="question" :visible="answerVisible">
          <div class="mt-3">
            <p
              v-if="question.answer.text"
              class="big-text"
              v-html="question.answer.text"
            />
            <div class="images">
              <BImg
                v-if="question.answer.picture"
                thumbnail="true"
                :src="question.answer.picture"
              />
            </div>
          </div>
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
    width: 25%;

    img {
      width: 100%;
    }
  }

  .right {
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: start;

    .images-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    .images {
      height: 600px;

      img {
        height: 100%;
      }
    }

    .description {
      margin-top: 30px;
      font-size: 28px;
    }

    .big-text {
      font-size: 36px;
    }
  }
}
</style>
