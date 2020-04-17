import {main as SearchViewHandler} from './searchView_noImgHandler'
import {brochureRedirection} from './brochureRedirection'
import {IAdmin} from './Interfaces/IAdmin'
import {gup} from './libs/gup'

const ADMIN:IAdmin={
	key:'avonRol',
	value:new RegExp('^correcciones$')
}
window.avonRol=(password:string)=>{
	sessionStorage.setItem(ADMIN.key,password)
}

var gupVal=gup();

window.addEventListener('load',()=>{
	//brochureRedirection(ADMIN,'/brochure*')
	SearchViewHandler(ADMIN,'/search/.*',gupVal)
})
