require('./bootstrap');

require('moment');

import Vue from 'vue';

import { InertiaApp } from '@inertiajs/inertia-vue';
import { InertiaForm } from 'laravel-jetstream';
import PortalVue from 'portal-vue';
import Buefy from "buefy";
import i18n from '../lang/i18n';
import "buefy/dist/buefy.css";
import * as VueGoogleMaps from "vue2-google-maps";
import route from 'ziggy';
import { Ziggy } from './ziggy';

// using lodash
import VueLodash from 'vue-lodash';
import lodash from 'lodash';

const API_KEY = "AIzaSyDbalkqfi5bgNJQBI_mUbo7LKAGR69r9tY";

// Vue.mixin({ methods: { route } });
Vue.mixin({
    methods: { route: (name, params, absolute) => route(name, params, absolute, Ziggy), },
});

Vue.use(VueLodash, { name: 'custom', lodasj: lodash });
Vue.use(InertiaApp);
Vue.use(Buefy, {
    defaultIconPack: 'fas',
});
Vue.use(InertiaForm);
Vue.use(PortalVue);
Vue.use(VueGoogleMaps, {
    load: {
        key: API_KEY,
        region: i18n.locale,
    },
    installComponents: true
})

const app = document.getElementById('app');

Vue.prototype.$route = (...args) => route(...args);
// Set up lodash
Vue.prototype._ = lodash

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
    i18n
}).$mount(app);
