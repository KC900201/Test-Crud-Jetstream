<template>
  <div>
    <Navbar />
    <nav class="level">
      <div class="level-item">
        <div class="card-header" card-radius="1rem">
          <article class="panel is-primary" style="width: 450px; padding: 20px">
            <p class="panel-heading">Edit User ID: {{ form.id }}</p>
            <section style="margin-top: 25px; margin-bottom: 25px">
              <form id="user_edit_form" @submit.prevent="editUser">
                <b-field label="Name">
                  <b-input v-model="form.name" required></b-input>
                </b-field>
                <b-field label="Email">
                  <b-input
                    type="email"
                    v-model="form.email"
                    maxlength="30"
                    required
                  ></b-input>
                </b-field>
                <button
                  class="button is-primary"
                  type="submit"
                  style="margin-top: 25px"
                >
                  Submit
                </button>
              </form>
            </section>
          </article>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Navbar from "../Shared/Navbar";
import AppFooter from "../Shared/AppFooter";

export default {
  props: { user: Object },
  components: {
    Navbar,
    AppFooter,
  },
  data() {
    return {
      form: {
        name: this.user.name || null,
        email: this.user.email || null,
        id: this.user.id || null,
      },
    };
  },
  methods: {
    editUser() {
      this.$inertia
        .put(route("users.update", this.user.id), this.form)
        .then(({ data }) => {});
    },
  },
};
</script>
