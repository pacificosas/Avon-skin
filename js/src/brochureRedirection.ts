import {onlyAdminConsole} from './libs/onlyAdmin'
import {IAdmin} from './Interfaces/IAdmin'

export function brochureRedirection(admin:IAdmin,urlPatt:string){


	onlyAdminConsole({
		cookieKey:admin.key,
		admin:admin,
		inUrlPatt:urlPatt,
		onDenied:()=>{
			window.location.href='/catalogos-avon'
		}
	})
}
