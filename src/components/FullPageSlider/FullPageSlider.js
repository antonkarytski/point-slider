import React, { Children, useRef } from "react";
import cx from "classnames";
import NavigateSlider from "./NavigateSlider/NavigateSlider";
import DotNavigation from "../DotNavigation/DotNavigation";
import { useWheelTurnsCounter } from "../../helpers/hook.wheel";
import { useRangeFetch } from "../../helpers/hook.rangeFetch";
import { useSwipe } from "../../helpers/hook.touch";
import { useMoveStyle } from "../../helpers/hook.styles";
import classes from "./FullPageSlider.module.scss";

const WHEEL_TURNS_TO_UPDATE = 4;

export default function FullPageSlider(props) {
  const {
    children,
    className,
    horizontal: isHorizontal,
    useWheelScroll: isUseWheelScroll,
    useNavigateSlider: isUseNavigateSlider,
    useDotNavigation: isUseDotNavigation,
    useParallaxBackground: isUseParallaxBackground,
  } = props;

  const {
    currentIndex: currentSlideIndex,
    setNextIndex: setNextSlideIndex,
    setIndex: setSlideIndex,
  } = useRangeFetch(children.length - 1);

  const directedWheelCounter = useWheelTurnsCounter(
    setNextSlideIndex,
    WHEEL_TURNS_TO_UPDATE
  );

  const sliderRef = useRef(null);
  const moveStyle = useMoveStyle(sliderRef, currentSlideIndex, isHorizontal);
  const touchEvents = useSwipe(
    setNextSlideIndex,
    100,
    isHorizontal,
    (event) => event.target.nodeName !== "INPUT"
  );
  const sliderStyles = isUseParallaxBackground
    ? { backgroundPosition: `center ${20 * currentSlideIndex}%` }
    : null;

  return (
    <div
      ref={sliderRef}
      className={cx(className, classes.FullPageSlider, {
        [classes.Vertical]: !isHorizontal,
        [classes.Horizontal]: isHorizontal,
      })}
      onWheel={isUseWheelScroll ? directedWheelCounter : null}
      style={sliderStyles}
      {...touchEvents}
    >
      {Children.map(children, (child, index) => {
        return (
          <child.type
            {...child.props}
            className={cx(child.props.className, classes.Slide)}
            style={index === 0 ? moveStyle : null}
          />
        );
      })}
      {isUseNavigateSlider ? (
        <NavigateSlider
          externalControlIndex={currentSlideIndex}
          elements={children}
          onChange={setSlideIndex}
        />
      ) : null}
      {isUseDotNavigation ? (
        <DotNavigation
          size={children.length}
          activeIndex={currentSlideIndex}
          onDotSelect={setSlideIndex}
        />
      ) : null}
    </div>
  );
}
