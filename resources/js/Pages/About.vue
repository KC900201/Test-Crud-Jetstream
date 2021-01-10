<template>
  <div style="margin: 0 auto; max-width: 850px">
    <Navbar />
    <header />
    <!--Testing with Buefy Carousel-->
    <b-carousel>
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-${carousel.color}`">
          <div class="hero-body has-text-centered">
            <h1 class="title">{{ carousel.text }}</h1>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
    <br />
    <QuestionBox
      v-if="questions.length > 0"
      :currentQuestion="questions[index]"
      :next="next"
      :prev="prev"
      :increment="increment"
      :numCorrect="numCorrect"
      :numTotal="numTotal"
    />
    <AppFooter />
  </div>
</template>
<script>
import Navbar from "./Shared/Navbar";
import AppFooter from "./Shared/AppFooter";
import QuestionBox from "./Play/QuestionBox";

export default {
  computed: {},
  mounted() {
    console.log("Component mounted.");
    this.loadApi();
    this.next();
    this.prev();
  },
  data() {
    return {
      carousels: [
        { text: "This is our about page", color: "primary" },
        { text: "lorem ipsum", color: "info" },
        { text: "Hello World", color: "success" },
        { text: "Funny", color: "warning" },
        { text: "Inside Out", color: "danger" },
      ],
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
    };
  },
  components: {
    Navbar,
    AppFooter,
    QuestionBox,
  },
  methods: {
    next() {
      this.index++;
    },
    prev() {
      this.index--;
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    },
    loadApi() {
      fetch("https://opentdb.com/api.php?amount=10&category=26&type=multiple", {
        method: "get",
      })
        .then((response) => {
          return response.json();
        })
        .then((jsonData) => {
          this.questions = jsonData.results;
          console.log(this.questions);
        });
    },
  },
};
</script>
