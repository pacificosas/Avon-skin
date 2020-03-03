import {main as SearchViewHandler} from './searchView_noImgHandler'
import {brochureRedirection} from './brochureRedirection'
import {IAdmin} from './Interfaces/IAdmin'

const ADMIN:IAdmin={
	key:'avonrol',
	value:new RegExp('correcciones')
}

brochureRedirection(ADMIN,'/brochure*')

window.addEventListener('load',()=>{
	SearchViewHandler(ADMIN,'/search/.*')
})
