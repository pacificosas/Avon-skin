// handle products with no image when its rendered the search view
import { Ranimator } from './Ranimator/Ranimator';
var selectors = {
    products: '.ProductListCell',
    productImg: 'img',
    searchResult: '#SearchHeader .Results span strong'
};
var target = "/styles/core/images/productfallback.svg";
export function main(urlPatt) {
    if (new RegExp(urlPatt).exec(window.location.pathname)) {
        var Results = document.querySelector(selectors.searchResult);
        Array.from(document.querySelectorAll(selectors.products)).forEach(function (item, index) {
            var img = item.querySelector(selectors.productImg);
            if (img.getAttribute('src') == target) {
                setTimeout(function () {
                    Ranimator.fadeOut(item, 300, {
                        onDone: function () {
                            item.style.display = 'none';
                        }
                    });
                    Results.innerText = parseInt(Results.innerText) - 1;
                }, 500 * index);
            }
        });
    }
}
// usage
// window.onload=()=>{
// 	main('/search/.*')
// }
//# sourceMappingURL=searchView_noImgHandler.js.map