function ReestructuringProductDetails({htmlFav,htmlNoFav}){
	var hasShades=document.querySelector('#ProductDetails .Shades') ? true : false;
	var price=document.querySelector('.ProductDetails .Prices')
	var newParent=document.querySelector('.ProductDetails #ProductNameAndRating')
	var offer=document.querySelector('.ProductDetails .ExclusiveOffers')
	var favorites=document.querySelector('.ProductDetails .AddToWishList')
	var newFavoritesContainer=document.querySelector('.ProductDetails h1.ProductName')

	removeFavLabel(favorites)

	if (isFavorite(favorites)) {
		favorites.setAttribute('corazon',"lleno")
		favorites.querySelector('a').innerHTML=htmlFav || ''
	}else{
		favorites.setAttribute('corazon',"vacio")
		favorites.querySelector('a').innerHTML=htmlNoFav || ''
	}

	newFavoritesContainer.appendChild(favorites)


	if (hasShades) {
		if (offer) {
			newParent.appendChild(offer)
		}
		newParent.appendChild(price);
	}else if(!hasShades && offer){
		newParent.appendChild(offer)
	}

}

function isFavorite(favElement){
	return favElement.querySelector('span span') != null
}

function removeFavLabel(favElement){
	if(favElement.querySelector('span span').childNodes[0].nodeType == 3){
  		favElement.querySelector('span span').childNodes[0].nodeValue=''
  	}
	favElement.querySelector('span a').innerText=''
}


ReestructuringProductDetails({
	htmlFav:'<li>coraXonXhito</li>',
  htmlNoFav:'<li>coraXonXhito VaXCio</li>'
})
