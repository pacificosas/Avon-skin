
export abstract class  Animate {

	protected timer:any
	abstract  fps:number=1000/24

	constructor(public duration:number) {
	}

	loop(timer:number):void{
		console.log('loop animation')
	}

	init(){
		this.timer = setInterval(()=>{
			if (this.loop) {
				this.loop(this.timer)
			}
		},this.fps)
	}

	stop(){
		clearInterval(this.timer)
	}

	calculateSteps(to=1){
		return (to/this.duration)*this.fps
	}

	cbValidation(cb:Function){
		if (cb && typeof cb == 'function') {
			return true
		}
	}
}
