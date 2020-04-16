import { onlyAdminConsole } from './libs/onlyAdmin';
export function brochureRedirection(admin, urlPatt) {
    onlyAdminConsole({
        cookieKey: admin.key,
        admin: admin,
        inUrlPatt: urlPatt,
        onDenied: function () {
            window.location.href = '/catalogos-avon';
        }
    });
}
//# sourceMappingURL=brochureRedirection.js.map