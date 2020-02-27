function ReestructuringProductDetails(_a) {
    var htmlFav = _a.htmlFav, htmlNoFav = _a.htmlNoFav;
    var hasShades = document.querySelector('#ProductDetails .Shades') ? true : false;
    var price = document.querySelector('.ProductDetails .Prices');
    var newParent = document.querySelector('.ProductDetails #ProductNameAndRating');
    var offer = document.querySelector('.ProductDetails .ExclusiveOffers');
    var favorites = document.querySelector('.ProductDetails .AddToWishList');
    var newFavoritesContainer = document.querySelector('.ProductDetails h1.ProductName');
    newFavoritesContainer.appendChild(favorites);
    if (hasShades) {
        if (offer) {
            newParent.appendChild(offer);
        }
        newParent.appendChild(price);
    }
    else if (!hasShades && offer) {
        newParent.appendChild(offer);
    }
}
function isFavorite(favElement) {
    return favElement.querySelector('span span a') != null;
}
function removeFavLabel(favElement) {
    if (favElement.querySelector('span span').childNodes[0].nodeType == 3) {
        favElement.querySelector('span span').childNodes[0].nodeValue = '';
    }
    favElement.querySelector('span a').innerText = '';
}
function handleFavorites(htmlFav, htmlNoFav) {
    var favorites = document.querySelector('.ProductDetails .AddToWishList');
    removeFavLabel(favorites);
    if (isFavorite(favorites)) {
        favorites.setAttribute('corazon', "lleno");
        favorites.querySelector('a').innerHTML = htmlFav || '';
    }
    else {
        favorites.setAttribute('corazon', "vacio");
        favorites.querySelector('a').innerHTML = htmlNoFav || '';
    }
}
var favicons = {
    htmlFav: '<i class="fas fa-heart"></i>',
    htmlNoFav: '<i class="far fa-heart"></i>'
};
window.onload = function () {
    ReestructuringProductDetails(favicons);
    handleFavorites(favicons.htmlFav, favicons.htmlNoFav);
    document.querySelector('.ProductDetails .AddToWishList').addEventListener('click', function () {
        handleFavorites(favicons.htmlFav, favicons.htmlNoFav);
    });
};
//# sourceMappingURL=productDetailHandler.js.map