// handle products with no image when its rendered the search view
import {Ranimator} from './libs//Ranimator/Ranimator'
import {searchObserver} from './libs/observers/searchObserver'
import {onlyAdminQueryString as onlyAdmin} from './libs/onlyAdmin'
import {IAdmin} from './Interfaces/IAdmin'


const selectors={
	products:'.ProductListCell',
	productImg:'img',
	searchResult:'#SearchHeader .Results span strong'
}

const target="/styles/core/images/productfallback.svg"

export function main(admin:IAdmin,urlPatt:string,gup:object){
	onlyAdmin({
		cookieKey:admin.key,
		admin:admin,
		inUrlPatt:urlPatt,
		onDenied:()=>{
			apply(urlPatt)
		}
	},gup)
}

function apply(urlPatt:string){
	if (new RegExp(urlPatt).exec(window.location.pathname)) {

		var element=document.querySelector('product-list')

		removeItems()

		var paginationBtns=Array.from(document.querySelectorAll('.PagingButtons'))

		paginationBtns.forEach( ( item:any )=>{

			item.addEventListener('click',()=>{

				searchObserver().then( (observer:MutationObserver) =>{

					console.log('removing objects with no image')
					observer.disconnect()

					setTimeout(()=>{

						removeItems()

					},1000)
				})

			})
		})

	}
}

function removeItems(renumber?:boolean){
	console.log('removing product with no image')
	console.log('--')

	var Results=document.querySelector(selectors.searchResult)

	Array.from(document.querySelectorAll(selectors.products)).forEach((item: any,index : number) => {
		var img=item.querySelector(selectors.productImg)
		if (img.getAttribute('src')==target) {
		    item.remove()
		}

	});
}
