<template>
  <div class="question-box-container">
    <h1>Question Box</h1>

    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Fanzy Quiz App</p>
          <p class="title">Counter: {{ numCorrect }}/{{ numTotal }}</p>
        </div>
      </div>
    </nav>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ currentQuestion.question }}
          </h1>
          <h2 class="subtitle">List of answers</h2>
          <div class="panel list-group">
            <!--Changed answers to shuffledAnswers in answer choice, for better shuffling-->
            <a
              class="panel-block list-group-item centered"
              v-for="(answer, index) in shuffledAnswers"
              :key="index"
              @click.prevent="boom(index)"
              :class="answerClass(index)"
            >
              {{ answer }}
            </a>
          </div>
          <br />
          <b-button
            rounded
            type="is-primary"
            @click="submitAnswer"
            :disabled="selectedIndex === null || answered"
            >Submit</b-button
          >
          <b-button rounded type="is-white" @click="prev">Previous</b-button>
          <b-button rounded type="is-black" @click="next">Next</b-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import _ from "lodash";

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    prev: Function,
    increment: Function,
    numCorrect: Number,
    numTotal: Number,
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      },
    },
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    },
  },
  mounted() {
    this.boom();
  },
  methods: {
    boom(index) {
      this.selectedIndex = index;
      //   alert("Jibaboom " + this.selectedIndex);
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ];
      this.shuffledAnswers = this._.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    submitAnswer() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }

      this.answered = true;

      this.increment(isCorrect);
    },
    answerClass(index) {
      return !this.answered && this.selectedIndex === index
        ? "selected"
        : this.answered && this.correctIndex === index
        ? "correct"
        : this.answered &&
          this.selectedIndex === index &&
          this.correctIndex !== index
        ? "incorrect"
        : "";
    },
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      answered: false,
      shuffledAnswers: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.list-group {
  margin-bottom: 10px;
}

.list-group-item {
  margin: 0 5px;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
  font-weight: bold;
  font-family: "Lucida Console", "Courier New", monospace;
}

.selected {
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: rgb(189, 60, 37);
}
</style>
