import React from "react";
import classes from "./Styles.module.scss"
import Slide from "./components/Slide";
import FullPageSlider from "./components/FullPageSlider/FullPageSlider";

//Add slider style
//Optimize and test to mobile
//Add changing of slider state with index toggle
//Add paralax


function App(){

	return (
		<FullPageSlider
			useWheelScroll
			useDotNavigation
		>
			<Slide className={classes.FirstSlide}>
				<FullPageSlider
					useNavigateSlider
					horizontal
				>
					<Slide
						rangeOptions={{
							title:"1960",
						}}
					>
						Die
					</Slide>
					<Slide
						rangeOptions={{
							title:"1975"
						}}
					>
						Motherfucker
					</Slide>
					<Slide
						rangeOptions={{
							title:"1990"
						}}
					>
						Otsosi
					</Slide>
				</FullPageSlider>
			</Slide>
			<Slide className={classes.SecondSlide}>
				<div>Hello1</div>
				<div>Hello2</div>
			</Slide>
			<Slide className={classes.ThirdSlide}>
				<div>Hello1</div>
				<div>Hello2</div>
			</Slide>
			<Slide className={classes.FourthSlide}>
				<div>Hello1</div>
				<div>Hello2</div>
			</Slide>
		</FullPageSlider>
	);
}

export default App;
