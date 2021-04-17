import {useState, useEffect} from "react"

export function useWheelCounter(fn, turnToUpdate){

	const [wheelCounter, setWheelCounter] = useState(0)
	const [isCleanerStart, setCleanerStart] = useState(false)

	function updateWheelCounter(event){
		const direction = Math.sign(event.deltaY)
		if(!wheelCounter || direction !== Math.sign(wheelCounter)){
			setWheelCounter(direction)
			return
		}
		setWheelCounter(index => index + direction)
	}


	useEffect(() => {
		if (wheelCounter !== 0 && !isCleanerStart) {
			setCleanerStart(true)
			const wheelCounterCleanTimer = setTimeout(() => {
				setWheelCounter(0)
				setCleanerStart(false)
			}, 200)
			return () => clearTimeout(wheelCounterCleanTimer)
		}
	}, [wheelCounter, isCleanerStart])


	useEffect(() => {
		if(Math.abs(wheelCounter) >= turnToUpdate){
			fn(Math.sign(wheelCounter))
			setWheelCounter(0)
		}
	}, [wheelCounter, fn, turnToUpdate])

	return updateWheelCounter;
}