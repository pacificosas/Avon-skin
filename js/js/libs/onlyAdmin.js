import { gup } from './gup';
export function onlyAdmin(config) {
    var urlPatt = new RegExp(config.inUrlPatt);
    var cookieKey = config.cookieKey || 'avon-admin-rol';
    if (urlPatt.exec(window.location.pathname)) {
        if (checkCokie(cookieKey)) {
            console.log('admin have login cookies');
        }
        else if (config.admin.value.test(gup()[config.admin.key])) {
            console.log('admin is log in');
            setCokie(cookieKey);
        }
        else {
            console.log('denied admin access');
            config.onDenied(cookieKey);
        }
    }
}
function checkCokie(key) {
    var c = sessionStorage.getItem(key);
    if (c) {
        return true;
    }
}
function setCokie(key) {
    sessionStorage.setItem(key, 'true');
}
function removeCokie(key) {
    var c = sessionStorage.removeItem(key);
}
//# sourceMappingURL=onlyAdmin.js.map