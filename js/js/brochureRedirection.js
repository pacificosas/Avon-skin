import { gup } from './libs/gup';
export function brochureRedirection(admin, urlToProtect, redirectTo) {
    var urlPatt = new RegExp(urlToProtect);
    if (gup()[admin.key] != admin.value && urlPatt.exec(window.location.pathname)) {
        window.location.href = redirectTo;
    }
}
//# sourceMappingURL=brochureRedirection.js.map