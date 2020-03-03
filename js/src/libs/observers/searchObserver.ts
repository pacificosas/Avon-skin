var element=document.querySelector('product-list')
var config = { attributes: true, childList: true, subtree: true };

export function searchObserver(){

	return new Promise((resolve,reject)=>{
		var observer = new MutationObserver( (mutation:any, observer:any) => {

			mutation=mutation.filter((m)=>{
				return m.type=='attributes' && m.target.tagName=="IMG" && m.attributeName=='src'
			})

			for (var m of mutation) {
				if(m==mutation[mutation.length-1]){
					console.log(mutation.length)
					resolve(observer)
				}
			}
		});

		observer.observe(element, config);
	})
}
