import { DialogProgrammatic as Dialog, ToastProgrammatic as Toast } from 'buefy'
import i18n from "../lang/i18n";
import axios from "axios";

export function errorAlert() {
    Dialog.alert({
        title: i18n.t('error_title'),
        message: i18n.t('error_occurred'),
        type: "is-danger",
        hasIcon: true,
        icon: "times-circle",
        iconPack: "fas",
        ariaRole: "alertdialog",
        ariaModal: true
    });
}

/**
 * Show buefy success toast
 * @param {String} pack - icon pack, defaults to 'fas' (e.g. 'far', 'fad')
 * @param {String} icon - font awesome icon (e.g. 'user')
 * @param {String} lang - translation key
 * @param {Object} langValues - values for translation
 * @param {Number} duration - duration of toast, defaults to 4000
 */

export function successToast({ pack, icon, lang, langValues, duration, position }) {
    if (typeof pack === 'undefined') {
        pack = 'fas';
    }
    if (typeof duration === 'undefined') {
        duration = 4000;
    }
    Toast.open({
        message: `<i class="${pack} fa-${icon}"></i>&nbsp;&nbsp;${i18n.t(lang, langValues)}`,
        duration: duration,
        type: "is-success",
        queue: false,
        position: position
    })
}

export function deleteConfirm(title, message, onConfirm, onCancel) {
    Dialog.confirm({
        title: title,
        message: message,
        confirmText: i18n.t('ok'),
        cancelText: i18n.t('cancel'),
        type: 'is-danger',
        icon: "exclamation-circle",
        iconPack: "fas",
        hasIcon: true,
        onConfirm: onConfirm || new Function(),
        onCancel: onCancel || new Function()
    })
}

export function restoreConfirm(title, message, onConfirm, onCancel) {
    Dialog.confirm({
        title: title,
        message: message,
        confirmText: i18n.t('ok'),
        cancelText: i18n.t('cancel'),
        type: 'is-warning',
        icon: "trash-restore",
        iconPack: "fas",
        hasIcon: true,
        onConfirm: onConfirm || new Function(),
        onCancel: onCancel || new Function()
    })
}

export function logoutConfirm() {
    Dialog.confirm({
        message: i18n.t('logout.confirm'),
        confirmText: i18n.t('ok'),
        cancelText: i18n.t('cancel'),
        onConfirm: () => axios.post(route('logout').url())
            .catch(error => errorAlert())
            .finally(() => window.location = route('home').url())
    })
}
