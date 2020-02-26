import {Animate} from './Ranimator.animate'

export interface ScaleParams{
	start:number,
	end:number
}

export class Scale extends Animate{

	public fps:number=1000/24;

	private steps:number;
	private style:any;
	private currentScale:number;

	public onLoop:Function
	public onDone:Function

	constructor(public element:HTMLElement,public duration:number,public params:ScaleParams){
		super(duration)
		if (!this.isScaleDown) {
			this.steps=super.calculateSteps(params.start-params.end)
		}else{
			this.steps=super.calculateSteps(params.end-params.start)
		}
		this.style=element.style
		this.currentScale=params.start
	}

	loop(timer:number){
		super.cbValidation(this.onLoop)? this.onLoop(this.element,timer): null
		if (this.evaluateEnd()) {
		    clearInterval(timer)
			super.cbValidation(this.onDone)? this.onDone(this.element): null
			return true
		}else{
			this.addStep()
			this.style.transform=`scale(${this.currentScale})`
		}
	}

	isScaleDown(){
		if (this.params.start > this.params.end) {
		    return true
		}
	}

	evaluateEnd():boolean{
		if (this.isScaleDown()) {
		    return this.currentScale <= this.params.end
		}else{
		    return this.currentScale >= this.params.end
		}
	}
	addStep():void{
		if (this.isScaleDown()) {
			this.currentScale-=this.steps
		}else{
			this.currentScale+=this.steps
		}
	}
}
