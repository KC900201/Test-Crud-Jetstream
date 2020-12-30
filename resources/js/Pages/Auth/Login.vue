<template>
  <div>
    <nav class="level">
      <div class="level-item">
        <div class="card-header" card-radius="1rem">
          <article class="panel is-primary" style="width: 450px; padding: 20px">
            <p class="panel-heading">Login</p>
            <form id="user_form" @submit.prevent="authLogin">
              <section style="margin-top: 25px; margin-bottom: 25px">
                <b-field
                  label="username"
                  :type="errors.username ? 'is-warning' : ''"
                  :message="errors.username"
                >
                  <b-input v-model="form.username" maxlength="30" required>
                  </b-input>
                </b-field>
                <b-field
                  label="password"
                  :type="errors.password ? 'is-warning' : ''"
                  :message="errors.password"
                >
                  <b-input
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
  </div>
</template>

<script>
export default {
  props: ["erros"],
  user: Object,
  components: {},
  data() {},
  methods: {},
};
</script>
