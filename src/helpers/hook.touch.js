import {useState} from "react"

export function useTouchEvents(fn, offsetToFiring, isHorizontal){

	const axleName = isHorizontal? "clientX" : "clientY"
	const [startCoordinates, setStartCoordinates] = useState({clientX:0, clientY:0})
	const [offsetDirection, setOffsetDirection] = useState(null)


	function touchStartHandler(event){
		const {[axleName]: currentPosition} = event.touches[0]
		setStartCoordinates({[axleName]: currentPosition})
	}

	function touchMoveHandler(event){
		event.preventDefault()
		const {[axleName]: currentPosition} = event.touches[0]
		const offset = currentPosition - startCoordinates[axleName]
		if(Math.abs(offset) > offsetToFiring) {
			setOffsetDirection(-Math.sign(offset))
		}
	}

	function touchEndHandler(){
		if(offsetDirection){
			setOffsetDirection(null)
			fn(offsetDirection)
		}
	}

	return {
		onTouchStart: touchStartHandler,
		onTouchMove: touchMoveHandler,
		onTouchEnd: touchEndHandler
	}
}