import styled from "styled-components"

const DEFAULT_COLOR_1 = "#e7bf16"
const DEFAULT_COLOR_2 = "#ffffff"

const GradientInput = styled.input`
	
	&::-webkit-slider-runnable-track {
      background: linear-gradient(
      	90deg, 
      	${({colors}) => getColors(colors)[0]}, 
      	${({colors}) => getColors(colors)[0]} ${({value}) => value}%, 
      	${({colors}) => getColors(colors)[1]} ${({value}) => value}%, 
      	${({colors}) => getColors(colors)[1]});
    }
`

function getColors(colors){
	return [
		colors[0] ? colors[0] : DEFAULT_COLOR_1,
		colors[1] ? colors[1] : colors[0] ? colors[0] : DEFAULT_COLOR_2
	]
}

export default GradientInput