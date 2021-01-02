import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// Loads all of json files needed for translation
function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]*\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]*)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

const i18n = new VueI18n({
    locale: localStorage.getItem('locale') ? localStorage.getItem('locale') : 'ja', // set default locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
        ja: require('./locales/ja.json'),
        en: require('./locales/en.json')
    }
});

export default i18n;
