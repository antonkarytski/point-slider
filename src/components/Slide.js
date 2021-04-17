import React from "react"

export default function Slide({className, children, rangeOptions, ...props}){
 return(
 	<div
		className={className}
		{...props}
	>
	 {children}
	</div>
 )
}