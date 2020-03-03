import { onlyAdmin } from './libs/onlyAdmin';
export function brochureRedirection(admin, urlPatt) {
    onlyAdmin({
        admin: admin,
        inUrlPatt: urlPatt,
        onDenied: function () {
            window.location.href = '/catalogos-avon';
        }
    });
}
//# sourceMappingURL=brochureRedirection.js.map