import {Animate} from './Ranimator.animate'


export abstract class Fade extends Animate{

	public fps:number=1000/24;
	public style:any

	protected steps:number;
	protected currentOpacity:number;

	public onLoop:Function
	public onDone:Function

	constructor(public element:HTMLElement,public duration:number){
		super(duration)
		this.steps=super.calculateSteps()
		this.style=element.style
	}

	loop(timer:number):boolean{
		super.cbValidation(this.onLoop)? this.onLoop(this.element,timer): null
		if (this.evaluateEnd()) {
		    clearInterval(timer)
			super.cbValidation(this.onDone)? this.onDone(this.element): null
			return true
		}else{
			this.addStep()
			this.style.opacity=this.currentOpacity
		}
	}

	evaluateEnd():boolean{
		return true
	}
	addStep():void{
		this.currentOpacity+=this.steps
	}
}
