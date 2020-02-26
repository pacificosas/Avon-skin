import {gup} from './libs/gup'

interface IAdmin{
	key:string,
	value:string
}

export function brochureRedirection(admin:IAdmin,urlToProtect:string,redirectTo:string){
	var urlPatt= new RegExp(urlToProtect)
	if ( gup()[admin.key] != admin.value && urlPatt.exec(window.location.pathname) ) {
	    window.location.href=redirectTo
	}
}
