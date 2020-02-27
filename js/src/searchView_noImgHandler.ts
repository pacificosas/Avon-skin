// handle products with no image when its rendered the search view
import {Ranimator} from './libs//Ranimator/Ranimator'
const selectors={
	products:'.ProductListCell',
	productImg:'img',
	searchResult:'#SearchHeader .Results span strong'
}

const target="/styles/core/images/productfallback.svg"

export function main(urlPatt:string){

	if (new RegExp(urlPatt).exec(window.location.pathname)) {

		var Results=document.querySelector(selectors.searchResult)

		Array.from(document.querySelectorAll(selectors.products)).forEach((item: any,index : number) => {

			var img=item.querySelector(selectors.productImg)
			if (img.getAttribute('src')==target) {
				setTimeout(()=>{
					Ranimator.fadeOut(item,300,{
						onDone:()=>{
						    item.style.display='none'
						}
					})
					Results.innerText=parseInt(Results.innerText)-1
				},500*index)
			}

		});
	}
}

// usage
// window.onload=()=>{
// 	main('/search/.*')
// }
