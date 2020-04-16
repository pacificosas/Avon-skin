import {main as SearchViewHandler} from './searchView_noImgHandler'
import {brochureRedirection} from './brochureRedirection'
import {IAdmin} from './Interfaces/IAdmin'
import {gup} from './libs/gup'

const ADMIN:IAdmin={
	key:'avonrol',
	value:new RegExp('^correcciones$')
}
const gupVal=gup()

window.addEventListener('load',()=>{
	console.log(gupVal);
	brochureRedirection(ADMIN,'/brochure*',gupVal)
	SearchViewHandler(ADMIN,'/search/.*')
})
