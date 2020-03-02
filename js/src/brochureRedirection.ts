import {gup} from './libs/gup'

interface IAdmin{
	key:string,
	value:RegExp
}

export function brochureRedirection(admin:IAdmin,urlToProtect:string,redirectTo:string){

	var urlPatt= new RegExp(urlToProtect)

	if (urlPatt.exec(window.location.pathname)) {

		if (checkCokie()) {
		    console.log('have cookie')

		}else if(admin.value.test(gup()[admin.key])){

			console.log('corrections log in')
			setCokie()

		}else{

			console.log('redirect')
		    window.location.href=redirectTo

		}
	}
}

function checkCokie(){
	var c=sessionStorage.getItem('avonrol-corrections')
	if (c) {
		return true
	}
}

function setCokie(){
	sessionStorage.setItem('avonrol-corrections','true')
}

function removeCokie(){
	var c=sessionStorage.removeItem('avonrol-corrections')
}
