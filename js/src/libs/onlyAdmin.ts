
import {gup} from './gup'
import {IOnlyAdminOptions} from '../Interfaces/IOnlyAdmin'


export function onlyAdminQueryString(config:IOnlyAdminOptions,gup:object){

	var urlPatt= new RegExp(config.inUrlPatt)
	const cookieKey= config.cookieKey || 'avon-admin-rol'

	if (urlPatt.exec(window.location.pathname)) {
		console.log(cookieKey);
		if (checkCokie(cookieKey)) {
		    console.log('admin have login cookies')

		}else if(config.admin.value.test(gup[config.admin.key])){

			console.log('admin is log in')
			setCokie(cookieKey)

		}else{
			console.log('denied admin access')
			config.onDenied(cookieKey)
		}
	}
}
export function onlyAdminConsole(config:IOnlyAdminOptions){

	var urlPatt= new RegExp(config.inUrlPatt)
	const cookieKey= config.cookieKey || 'avon-admin-rol'

	if (urlPatt.exec(window.location.pathname)) {
		if (cookieValidation(cookieKey,config.admin.value)) {
		    console.log('admin have login cookies')

		}else{
			console.log('denied admin access')
			config.onDenied(cookieKey)
		}
	}
}

function cookieValidation(key:string,spected:RegExp){
	var value=sessionStorage.getItem(key)
	if (spected.test(value)) {
		return true
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
