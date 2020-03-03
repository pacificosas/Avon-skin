
import {gup} from './gup'
import {IOnlyAdminOptions} from '../Interfaces/IOnlyAdmin'


export function onlyAdmin(config:IOnlyAdminOptions){

	var urlPatt= new RegExp(config.inUrlPatt)
	const cookieKey= config.cookieKey || 'avon-admin-rol'

	if (urlPatt.exec(window.location.pathname)) {

		if (checkCokie(cookieKey)) {
		    console.log('admin have login cookies')

		}else if(config.admin.value.test(gup()[config.admin.key])){

			console.log('admin is log in')
			setCokie(cookieKey)

		}else{
			console.log('denied admin access')
			config.onDenied(cookieKey)
		}
	}
}

function checkCokie(key:string){
	var c=sessionStorage.getItem(key)
	if (c) {
		return true
	}
}

function setCokie(key:string){
	sessionStorage.setItem(key,'true')
}

function removeCokie(key:string){
	var c=sessionStorage.removeItem(key)
}
