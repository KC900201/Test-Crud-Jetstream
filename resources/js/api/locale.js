import axios from "../config/axios";

export default {
    setLocale(locale) {
        return axios.post(route('set-locale', locale).url());
    }
}
