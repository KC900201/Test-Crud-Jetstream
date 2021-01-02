<template>
    <div style="margin: 0 auto; max-width:850px">
        <Navbar />
        <div id="contactForm" class="m-t-20">
            <div class="columns is-centered">
                <div class="column is-6">
                    <div class="box">
                        <div class="container">
                            <h1 class="title">{{ $t('contact.title') }}</h1>

                            <b-field :label="$t('name')">
                                <b-input placeholder="Enter Your Name"> </b-input>
                            </b-field>
                            <b-field :label="$t('email')">
                                <b-input type="email" placeholder="Enter Your Email"> </b-input>
                            </b-field>
                            <b-field :label="$t('contact.subject')">
                                <b-input placeholder="Input Your Subject"> </b-input>
                            </b-field>

                            <div class="field">
                                <strong><label for="content">{{ $t('contact.message') }}</label></strong>

                                <div class="control">
                                    <textarea class="input" placeholder="Please enter your message!"></textarea>
                                </div>
                            </div>

                            <button class="button is-primary">{{ $t('submit') }}</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AppFooter />
    </div>
</template>
<script>
    import Navbar from './Shared/Navbar.vue';
    import AppFooter from './Shared/AppFooter.vue';


    export default {
        mounted() {
            console.log("Component mounted.");
        },
        components: {
            Navbar,
            AppFooter
        }
    }
</script>
