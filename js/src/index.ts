import {main as SearchViewHandler} from './searchView_noImgHandler'
import {brochureRedirection} from './brochureRedirection'


brochureRedirection({
	key:'avonrol',
	value:'correcciones'
},'/brochure*','/')

window.onload=()=>{
	SearchViewHandler('/search/.*')
}
