<template>
    <b-navbar style="margin-bottom:20px">
        <template slot="brand">
            <b-navbar-item >
                <inertia-link href="/">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                />
                </inertia-link>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                <inertia-link href="/">{{ $t('nav.home') }}</inertia-link>
            </b-navbar-item>
            <b-navbar-item >
               <inertia-link href="/about">{{ $t('nav.about') }}</inertia-link>
                <!-- <inertia-link :href="$route('about')">{{ $t('nav.about') }}</inertia-link> -->
            </b-navbar-item>
            <b-navbar-item>
                <inertia-link href="/contact">{{ $t('nav.contact') }}</inertia-link>
                <!-- <inertia-link :href="$route('contact')">{{ $t('nav.contact') }}</inertia-link> -->
            </b-navbar-item>
            <!-- <b-navbar-dropdown hoverable collapsible label="Extra">
                <b-navbar-item href="/users">View User</b-navbar-item>
                <b-navbar-item href="/photos">Upload File</b-navbar-item>
                <b-navbar-item href="/photos/view">View Photo</b-navbar-item>
            </b-navbar-dropdown> -->
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <!-- <a href="$route('users.create')" class="button is-primary">
                        <strong>Register</strong>
                    </a>
                    <a href="/login" class="button is-light">
                        <strong>Log in</strong>
                    </a>
                    -->
                    <!-- <inertia-link :href="$route('users.create')" class="button is-primary"> -->
                    <inertia-link :href="$route('register')" class="button is-primary">
                        <strong>{{ $t('register') }}</strong>
                    </inertia-link>
                    <inertia-link :href="$route('login')" class="button is-light">
                        <strong>{{ $t('login') }}</strong>
                    </inertia-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted");
    }
}
</script>
