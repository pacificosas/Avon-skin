export function rat( selector:string, isMultiple:boolean = true ):any{
	var r=Array.from(document.querySelectorAll(selector))
	if (isMultiple) {
	    return r[0]
	}else{
		return r
	}
}
