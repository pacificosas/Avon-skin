import {Fade} from './Ranimator.fade'

export class FadeOut extends Fade{
	constructor(element:HTMLElement,duration:number){
		super(element,duration)
		this.currentOpacity=1
	}
	evaluateEnd():boolean{
		return this.currentOpacity <= 0
	}
	addStep(){
		this.currentOpacity-=this.steps
	}
}
