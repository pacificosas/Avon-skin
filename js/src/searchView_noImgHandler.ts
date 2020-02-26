// handle products with no image when its rendered the search view
import {Ranimator} from './Ranimator.min.js'
const selectors={
	products:'.ProductListCell',
	productImg:'img',
	searchResult:'#SearchHeader .Results span strong'
}

const target="/styles/core/images/productfallback.svg"

export function main(urlPatt:string){

	if (new RegExp(urlPatt).exec(window.location.pathname)) {

		var Results=document.querySelector(selectors.searchResult)

		Array.from(document.querySelectorAll(selectors.products)).forEach((item: any) => {

			var img=item.querySelector(selectors.productImg)

			if (img.getAttribute('src')==target) {
			    item.style.display='none'
				Results.innerText=parseInt(Results.innerText)-1
			}

		});
	}
}

// usage
// window.onload=()=>{
// 	main('/search/.*')
// }
