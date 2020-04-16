export function onlyAdminQueryString(config, gup) {
    var urlPatt = new RegExp(config.inUrlPatt);
    var cookieKey = config.cookieKey || 'avon-admin-rol';
    if (urlPatt.exec(window.location.pathname)) {
        console.log(cookieKey);
        if (checkCokie(cookieKey)) {
            console.log('admin have login cookies');
        }
        else if (config.admin.value.test(gup[config.admin.key])) {
            console.log('admin is log in');
            setCokie(cookieKey);
        }
        else {
            console.log('denied admin access');
            config.onDenied(cookieKey);
        }
    }
}
export function onlyAdminConsole(config) {
    var urlPatt = new RegExp(config.inUrlPatt);
    var cookieKey = config.cookieKey || 'avon-admin-rol';
    if (urlPatt.exec(window.location.pathname)) {
        if (cookieValidation(cookieKey, config.admin.value)) {
            console.log('admin have login cookies');
        }
        else {
            console.log('denied admin access');
            config.onDenied(cookieKey);
        }
    }
}
function cookieValidation(key, spected) {
    var value = sessionStorage.getItem(key);
    if (spected.test(value)) {
        return true;
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