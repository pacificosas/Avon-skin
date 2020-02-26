import {Fade} from './Ranimator.fade'

export class FadeIn extends Fade{
	constructor(element:HTMLElement,duration:number){
		super(element,duration)
		this.currentOpacity=0
	}

	evaluateEnd():boolean{
		return this.currentOpacity >= 1
	}

	addStep(){
		this.currentOpacity+=this.steps
	}
}
