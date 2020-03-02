import { gup } from './libs/gup';
export function brochureRedirection(admin, urlToProtect, redirectTo) {
    var urlPatt = new RegExp(urlToProtect);
    if (urlPatt.exec(window.location.pathname)) {
        if (checkCokie()) {
            console.log('have cookie');
        }
        else if (admin.value.test(gup()[admin.key])) {
            console.log('corrections log in');
            setCokie();
        }
        else {
            console.log('redirect');
            window.location.href = redirectTo;
        }
    }
}
function checkCokie() {
    var c = sessionStorage.getItem('avonrol-corrections');
    if (c) {
        return true;
    }
}
function setCokie() {
    sessionStorage.setItem('avonrol-corrections', 'true');
}
function removeCokie() {
    var c = sessionStorage.removeItem('avonrol-corrections');
}
//# sourceMappingURL=brochureRedirection.js.map