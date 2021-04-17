import React from "react"
import classes from "./styles/RangeSlider.module.scss";

export default function DataList({data = [], id}){
 return(
	 <datalist id={id} className={classes.RangeDataList}>
		 {
		 	data.map(({title}, index) => {
		 		return(
					<option
						key = {`datalistopt${id}${index}`}
						value={100 / data.length * index}>
						{title? title : null}
					</option>
				)
			})
		 }
	 </datalist>
 )
}