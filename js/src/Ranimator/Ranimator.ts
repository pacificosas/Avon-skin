import {FadeIn} from './Ranimator.fadeIn'
import {FadeOut} from './Ranimator.fadeOut'
import {Scale,ScaleParams} from './Ranimator.scale'

interface CBS{
	onLoop?:Function,
	onDone?:Function
}

export class Ranimator{
	constructor(){}

	static fadeIn(element:any,duration:number=800,cbs?:CBS){
		var f=new FadeIn(element,duration)
		if (cbs) {
			f.onLoop=cbs.onLoop
			f.onDone=cbs.onDone
		}
		f.init()

		return f
	}
	static fadeOut(element:any,duration:number=800,cbs?:CBS){
		var f=new FadeOut(element,duration)
		if (cbs) {
			f.onLoop=cbs.onLoop
			f.onDone=cbs.onDone
		}
		f.init()
		return f
	}
	static scale(element:any,duration:number=800,args:ScaleParams,cbs?:CBS){
		var f=new Scale(element,duration,args)
		if (cbs) {
			f.onLoop=cbs.onLoop
			f.onDone=cbs.onDone
		}
		f.init()
		return	f
	}

}
