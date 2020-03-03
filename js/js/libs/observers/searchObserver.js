var element = document.querySelector('product-list');
var config = { attributes: true, childList: true, subtree: true };
export function searchObserver() {
    return new Promise(function (resolve, reject) {
        var observer = new MutationObserver(function (mutation, observer) {
            mutation = mutation.filter(function (m) {
                return m.type == 'attributes' && m.target.tagName == "IMG" && m.attributeName == 'src';
            });
            for (var _i = 0, mutation_1 = mutation; _i < mutation_1.length; _i++) {
                var m = mutation_1[_i];
                if (m == mutation[mutation.length - 1]) {
                    console.log(mutation.length);
                    resolve(observer);
                }
            }
        });
        observer.observe(element, config);
    });
}
//# sourceMappingURL=searchObserver.js.map