<template>
    <footer class="footer" :class="{fixed : isFixed}" contenteditable="false">
        <div class="content has-text-centered">
            <div class="language-buttons">
                <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                    <img style="width: 50px;" :src='entry.flagImgUrl' :alt="entry.title" />
                </button>
            </div>
        </div>
    </footer>
</template>
<script>
import Api from "../../api/locale";
import i18n from "../../../lang/i18n";

export default {
    props: {
        isFixed: Boolean
    },
    data() {
        return {
            languages: [
                {
                    flag: "jp",
                    language: "ja",
                    title: "日本語",
                    flagImgUrl: "/images/japan.svg"
                },
                {
                    flag: "us",
                    language: "en",
                    title: "English",
                    flagImgUrl: "/images/united-states.svg"
                }
            ]
        };
    },
    methods: {
        changeLocale(locale) {
            localStorage.setItem("locale", locale);
            i18n.locale = locale;
            // Send to server for laravel
            Api.setLocale(locale);
        }
    }
}
</script>
