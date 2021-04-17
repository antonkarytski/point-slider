import React, { useMemo, useState } from "react"
import cx from "classnames"
import classes from "./styles/RangeSlider.module.scss"
import DataList from "./DataList";
import GradientInput from "./styles/GradientInput";

export default function RangeSlider(props){

	const {
		className,
		initValue = 0,
		onChange,
		dataList = [],
		classes: APIClasses = {},
		colors = [],
		...nativeOptions
	} = props

	const [value, setValue] = useState(initValue)
	const listId = useMemo(() => Math.random(), [])
	const dataRanges = useMemo(() => {
		return dataList.map((dataElement, index) => {
			return 100 / dataList.length * (index + 1)
		})
	}, [dataList])

	function onChangeHandler({target}){
		const value = Number(target.value)
		setValue(value)
		const currentRangeIndex = dataRanges.findIndex((rangeValue) => {
			return value <= rangeValue
		})
		onChange(value, currentRangeIndex)
	}

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