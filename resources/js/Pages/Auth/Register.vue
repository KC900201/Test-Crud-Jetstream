<template>
  <div>
    <Navbar />
    <!-- {{ errors }} -->
    <nav class="level">
      <div class="level-item">
        <div class="card-header" card-radius="1rem">
          <article class="panel is-primary" style="width: 450px; padding: 20px">
            <p class="panel-heading">{{ $t("register") }}</p>
            <form id="user_form" @submit.prevent="createUser">
              <section style="margin-top: 25px; margin-bottom: 25px">
                <b-field
                  :label="$t('name')"
                  :type="errors.name ? 'is-warning' : ''"
                  :message="errors.name"
                >
                  <b-input v-model="form.name" required> </b-input>
                </b-field>
                <b-field
                  :label="$t('user_name')"
                  :type="errors.username ? 'is-warning' : ''"
                  :message="errors.username"
                >
                  <b-input v-model="form.username" required> </b-input>
                </b-field>
                <b-field
                  :label="$t('email')"
                  :type="errors.email ? 'is-warning' : ''"
                  :message="errors.email"
                >
                  <b-input
                    type="email"
                    v-model="form.email"
                    maxlength="30"
                    required
                  >
                  </b-input>
                </b-field>
                <b-field
                  :label="$t('password')"
                  :type="errors.password ? 'is-danger' : ''"
                  :message="errors.password"
                >
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
                <b-field
                  :label="$t('password_confirm')"
                  :type="errors.password_confirmation ? 'is-danger' : ''"
                  :message="errors.password_confirmation"
                >
                  <b-input
                    type="password"
                    v-model="form.password_confirmation"
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
                  {{ $t("submit") }}
                </button>
              </section>
            </form>
          </article>
        </div>
      </div>
    </nav>
    <!-- <div v-if="errors && errors.email">{{ errors.email }}</div> -->
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
  remember: {
    data: ["form"],
  },
  data() {
    return {
      form: {
        name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        validate: false,
        // invalidEmailMessage: "Invalid email address !"
      },
      isLoading: false,
    };
  },

  methods: {
    createUser() {
      // this.$inertia.post(route("users.store"), this.form).then(() => {});
      this.$inertia
        .visit(route("register"), {
          method: "post",
          data: this.form,
          replace: true,
          preserveState: true,
        })
        .then(() => {});
    },
    validateField() {
      // const checkEmail = /\S+@\S+\.\S+/.test(this.form.email)
      // console.log(">>>>>>>>>>>>>>>>>", this.form.email,  checkEmail)
      console.log("------------>>>", this.user);
      if (this.form.password.length >= 6) {
        this.validate = true;
      }
    },
  },
};
</script>
