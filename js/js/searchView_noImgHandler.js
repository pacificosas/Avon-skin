import { searchObserver } from './libs/observers/searchObserver';
import { onlyAdminQueryString as onlyAdmin } from './libs/onlyAdmin';
var selectors = {
    products: '.ProductListCell',
    productImg: 'img',
    searchResult: '#SearchHeader .Results span strong'
};
var target = "/styles/core/images/productfallback.svg";
export function main(admin, urlPatt, gup) {
    onlyAdmin({
        cookieKey: admin.key,
        admin: admin,
        inUrlPatt: urlPatt,
        onDenied: function () {
            apply(urlPatt);
        }
    }, gup);
}
function apply(urlPatt) {
    if (new RegExp(urlPatt).exec(window.location.pathname)) {
        var element = document.querySelector('product-list');
        removeItems();
        var paginationBtns = Array.from(document.querySelectorAll('.PagingButtons'));
        paginationBtns.forEach(function (item) {
            item.addEventListener('click', function () {
                searchObserver().then(function (observer) {
                    console.log('removing objects with no image');
                    observer.disconnect();
                    setTimeout(function () {
                        removeItems();
                    }, 1000);
                });
            });
        });
    }
}
function removeItems(renumber) {
    console.log('removing product with no image');
    console.log('--');
    var Results = document.querySelector(selectors.searchResult);
    Array.from(document.querySelectorAll(selectors.products)).forEach(function (item, index) {
        var img = item.querySelector(selectors.productImg);
        if (img.getAttribute('src') == target) {
            item.remove();
        }
    });
}
//# sourceMappingURL=searchView_noImgHandler.js.map