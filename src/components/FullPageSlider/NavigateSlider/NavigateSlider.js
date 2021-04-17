import React, { Children } from "react"
import RangeSlider from "../../RangeSLider/RangeSlider";
import classes from "./NavigateSlider.module.scss";

export default function NavigateSlider({elements, onChange}){

	function onChangeHandler(sliderValue, indexValue){
		onChange(indexValue)
	}

	const sliderDataSet = Children.map(elements, (child, index) => {
		return child.props.rangeOptions
	}).filter(value => value)

	return(
		<RangeSlider
			className={classes.NavigateSlider}
			dataList={sliderDataSet}
			onChange={onChangeHandler}
		/>)
}