export function rat(selector, isMultiple) {
    if (isMultiple === void 0) { isMultiple = true; }
    var r = Array.from(document.querySelectorAll(selector));
    if (isMultiple) {
        return r[0];
    }
    else {
        return r;
    }
}
//# sourceMappingURL=utils.js.map