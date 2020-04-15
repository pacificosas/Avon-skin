import { onlyAdmin } from './libs/onlyAdmin';
export function brochureRedirection(admin, urlPatt, gup) {
    onlyAdmin({
        admin: admin,
        inUrlPatt: urlPatt,
        onDenied: function () {
            window.location.href = '/catalogos-avon';
        }
    }, gup);
}
//# sourceMappingURL=brochureRedirection.js.map