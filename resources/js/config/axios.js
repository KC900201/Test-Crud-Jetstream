import axios from "axios";
import {errorAlert} from "../alert";
import i18n from "../../lang/i18n";


const instance = axios.create({
    baseURL: "/",
});

instance.interceptors.request.use(
    config => {
        let locale = localStorage.getItem("locale")
            ? localStorage.getItem("locale")
            : "ja";
        config.headers.common['Content-Language'] = locale;
        return config;
    }
);

// Add a response interceptor
// instance.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error.response.status === 401) {
//             window.location = process.env.MIX_APP_URL + '/login';
//             return null;
//         } else if (error.response.status === 422) {

//         } else {
//             console.error(error);
//             errorAlert(i18n.t("error_title"), i18n.t("error_occurred"));
//         }

//         return Promise.reject(error);
//     }
// );

export default instance;
