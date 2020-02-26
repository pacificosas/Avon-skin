var selectors = {
    products: '.ProductListCell',
    productImg: 'img',
    searchResult: '#SearchHeader .Results span strong'
};
var target = "/styles/core/images/productfallback.svg";
export function main(urlPatt) {
    if (new RegExp(urlPatt).exec(window.location.pathname)) {
        var Results = document.querySelector(selectors.searchResult);
        Array.from(document.querySelectorAll(selectors.products)).forEach(function (item) {
            var img = item.querySelector(selectors.productImg);
            if (img.getAttribute('src') == target) {
                item.style.display = 'none';
                Results.innerText = parseInt(Results.innerText) - 1;
            }
        });
    }
}
// usage
// window.onload=()=>{
// 	main('/search/.*')
// }
//# sourceMappingURL=searchView_noImgHandler.js.map