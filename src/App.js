import React from "react";
import cx from "classnames";
import Slide from "./components/Slide";
import FullPageSlider from "./components/FullPageSlider/FullPageSlider";
import classes from "./Styles.module.scss";

const historySlides = [
  {
    name: "BMW 3/15PS",
    title: "1928",
  },
  {
    name: "BMW 335",
    title: "1940",
  },
  {
    name: "BMW 507",
    title: "1960",
  },
  {
    name: "BMW E30",
    title: "1980",
  },
  {
    name: "BMW M3 2021",
    title: "2021",
  },
];

function App() {
  return (
    <FullPageSlider
      useWheelScroll
      useDotNavigation
      useParallaxBackground
      className={classes.MainSlider}
    >
      <Slide className={cx(classes.FirstSlide, classes.Slide)}>
        <h2>Welcome to BMW</h2>
      </Slide>
      <Slide className={cx(classes.SecondSlide, classes.Slide)}>
        <FullPageSlider useNavigateSlider horizontal>
          {historySlides.map(({ title, name }, index) => {
            return (
              <Slide
                className={cx(
                  classes[`CarSlide${index + 1}`],
                  classes.HistoryInnerSlide
                )}
                key={`historySlide${index}`}
                rangeOptions={{ title }}
              >
                <div className={classes.Overlay}>
                  <h3>{name}</h3>
                </div>
              </Slide>
            );
          })}
        </FullPageSlider>
      </Slide>
      <Slide className={cx(classes.ThirdSlide, classes.Slide)}>
        <span className={classes.Intro}>Here...</span>
      </Slide>
      <Slide
        className={cx(classes.ThirdSlide, classes.FourthSlide, classes.Slide)}
      >
        <span className={classes.Intro}>What you need NOW</span>
        <h3>BMW M3 2021</h3>
      </Slide>
    </FullPageSlider>
  );
}

export default App;
