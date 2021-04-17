import React, { Children, useRef } from "react"
import cx from "classnames"
import NavigateSlider from "./NavigateSlider/NavigateSlider";
import DotNavigation from "../DotNavigation/DotNavigation";
import { useWheelCounter } from "../../helpers/hook.wheel";
import { useRangeFetch } from "../../helpers/hook.rangeFetch";
import { useTouchEvents } from "../../helpers/hook.touch";
import { useMoveStyle } from "../../helpers/hook.moveStyle";
import classes from "./FullPageSlider.module.scss"

const WHEEL_TURNS_TO_UPDATE = 4

export default function FullPageSlider(props){

	const {
		children,
		horizontal: isHorizontal,
		useWheelScroll: isUseWheelScroll,
		useNavigateSlider : isUseNavigateSlider,
		useDotNavigation: isUseDotNavigation,
	} = props

	const {
		currentIndex: currentSlideIndex,
		setNextIndex: setNextSlideIndex,
		setIndex: setSlideIndex
	} = useRangeFetch(children.length - 1)

	const directedWheelCounter = useWheelCounter(setNextSlideIndex, WHEEL_TURNS_TO_UPDATE)
	const touchEvents = useTouchEvents(setNextSlideIndex, 100, isHorizontal)
	const sliderRef = useRef(null)
	const moveStyle = useMoveStyle(sliderRef, currentSlideIndex, isHorizontal)

	return (
		<div
			ref={sliderRef}
			className={cx(
				classes.FullPageSlider,
				{
					[classes.Vertical]: !isHorizontal,
					[classes.Horizontal]: isHorizontal,
				},
			)}
			onWheel={isUseWheelScroll ? directedWheelCounter : null}
			{...touchEvents}
		>
			{
				Children.map(children, (child, index) => {
					return (
						<child.type
							{...child.props}
							className={cx(child.props.className, classes.Slide)}
							style={index === 0 ? moveStyle : null}

						/>)
				})
			}
			{
				isUseNavigateSlider?
				<NavigateSlider
					elements={children}
					onChange={setSlideIndex}
				/> : null
			}
			{
				isUseDotNavigation?
					<DotNavigation
						size={children.length}
						activeIndex={currentSlideIndex}
						onDotSelect={setSlideIndex}
					/>:null
			}
		</div>
	)
}
