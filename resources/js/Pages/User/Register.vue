<template>
  <div>
    <Navbar />
    <nav class="level">
      <div class="level-item">
        <div class="card-header" card-radius="1rem">
          <article class="panel is-primary" style="width: 450px; padding: 20px">
            <p class="panel-heading">Create a new user</p>
            <form id="user_form" @submit.prevent="createUser">
              <section style="margin-top: 25px; margin-bottom: 25px">
                <b-field label="Name">
                  <b-input v-model="form.name" required> </b-input>
                </b-field>

                <b-field label="Email">
                  <b-input
                    type="email"
                    v-model="form.email"
                    maxlength="30"
                    required
                  >
                  </b-input>
                </b-field>
                <b-field label="Password">
                  <b-input
                    type="password"
                    v-model="form.password"
                    maxlength="30"
                    required
                    v-on:input="validateField()"
                    minlength="6"
                  >
                  </b-input>
                </b-field>

                <button
                  class="button is-primary"
                  type="submit"
                  style="margin-top: 25px"
                  :disabled="isLoading"
                >
                  Submit
                </button>
              </section>
            </form>
          </article>
        </div>
      </div>
    </nav>
    <div v-if="errors && errors.email">{{ errors.email }}</div>
    <AppFooter />
  </div>
</template>

<script>
import Navbar from "../Shared/Navbar";
import AppFooter from "../Shared/AppFooter";

export default {
  props: ["errors"],
  user: Object,

  components: {
    Navbar,
    AppFooter,
  },

  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        validate: false,
      },
      isLoading: false,
    };
  },

  methods: {
    createUser() {
      this.$inertia.post(route("users.store"), this.form).then(() => {});
    },
    validateField() {
      // const checkEmail = /\S+@\S+\.\S+/.test(this.form.email)
      // console.log(">>>>>>>>>>>>>>>>>", this.form.email,  checkEmail)
      console.log("------------>>>", this.user);
      if (this.form.password.length > 3) {
        this.validate = true;
      }
    },
  },
};
</script>
