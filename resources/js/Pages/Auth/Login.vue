<template>
    <div>
        <Navbar />
        <nav class="level">
            <div class="level-item ">
                <div class="card-header" card-radius="1rem">
                    <article
                        class="panel is-primary"
                        style="width:450px; padding:20px"
                    >
                        <p class="panel-heading">
                            {{ $t('login') }}
                        </p>
                        <form id="user_form" @submit.prevent="authLogin">
                            <section
                                style=" margin-top:25px; margin-bottom:25px"
                            >
                                <!-- <b-field label="Email"
                                    :type="errors.email ? 'is-danger' : ''"
                                    :message="errors.email"
                                >
                                    <b-input
                                        type="email"
                                        v-model="form.email"
                                        maxlength="30"
                                        required
                                    >
                                    </b-input>
                                </b-field> -->
                                <b-field :label="$t('user_name')"
                                    :type="errors.username ? 'is-warning' : ''"
                                    :message="errors.username"
                                    >
                                    <b-input
                                        v-model="form.username"
                                        maxlength="30"
                                        required
                                    >
                                    </b-input>
                                </b-field>
                                <b-field :label="$t('password')"
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
                                <button
                                    class="button is-primary"
                                    type="submit"
                                    style="margin-top:25px"
                                    :disabled="isLoading"
                                >
                                    {{ $t('submit') }}
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
import Navbar from "../Shared/Navbar.vue";
import AppFooter from  "../Shared/AppFooter.vue";

export default {
    props: ["errors"],
    user: Object,
    components: {
        Navbar,
        AppFooter
    },
    data() {
        return {
            form: {
                // email: "",
                username: "",
                password: "",
                validate: false
                // invalidEmailMessage: "Invalid email address !"
            },
            isLoading: false
        };
    },
    methods: {
        authLogin() { // return authentication control of jetstream
            this.$inertia.post(route("login"), this.form).then(() => {});
        },
        validateField() {
            // const checkEmail = /\S+@\S+\.\S+/.test(this.form.email)
            // console.log(">>>>>>>>>>>>>>>>>", this.form.email,  checkEmail)
            console.log("------------>>>", this.user);
            if (this.form.password.length > 3) {
                this.validate = true;
            }
        }
    }
}
</script>
