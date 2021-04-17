import React from "react"
import cx from "classnames"
import classes from "./DotNavigation.module.scss"

export default function Dot({className, onClick}){
	return(
		<div
			onClick={onClick}
			className={cx(classes.Dot, className)}
		/>
	)
}