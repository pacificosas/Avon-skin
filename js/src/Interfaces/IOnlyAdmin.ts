import {IAdmin} from './IAdmin';

export interface IOnlyAdminOptions{
	admin:IAdmin;
	inUrlPatt:string;
	onDenied:Function;
	cookieKey?:string;
}
