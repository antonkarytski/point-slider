import React, { useMemo, useState, useEffect } from "react"
import cx from "classnames"
import classes from "./styles/RangeSlider.module.scss"
import DataList from "./DataList";
import GradientInput from "./styles/GradientInput";

export default function RangeSlider(props){

	const {
		className,
		initIndex,
		onChange,
		dataList = [],
		classes: APIClasses = {},
		colors = [],
		...nativeOptions
	} = props

	const [value, setValue] = useState(initIndex)
	const listId = useMemo(() => Math.random(), [])

	function onChangeHandler({target}){
		const value = Number(target.value)
		setValue(value)
		const currentRangeIndex = dataList.findIndex(({range}) => {
			return value <= range
		})
		onChange(value, currentRangeIndex)
	}

	useEffect(() => {
		setValue(initIndex)
	},[initIndex])

	return (
		<div className={className}>
			<GradientInput
				list={listId}
				value={value}
				type={"range"}
				className={cx(classes.RangeSlider, APIClasses.input)}
				onChange={onChangeHandler}
				colors={colors}
				{...nativeOptions}
			/>
			{
				dataList.length ?
					<DataList
						data={dataList}
						id={listId}
					/> : null
			}
		</div>
	)
}