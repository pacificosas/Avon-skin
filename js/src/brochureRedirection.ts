import {onlyAdmin} from './libs/onlyAdmin'
import {IAdmin} from './Interfaces/IAdmin'

export function brochureRedirection(admin:IAdmin,urlPatt:string){
	onlyAdmin({
		admin:admin,
		inUrlPatt:urlPatt,
		onDenied:()=>{
			window.location.href='/catalogos-avon'
		}
	})
}
