import { useEffect, useState } from "react";
import { useWindowSize } from "./hook.window";

export function useMoveStyle(ref, index, isHorizontal) {
  useWindowSize();
  const [sliderSizes, setSliderSizes] = useState({
    height: 0,
    width: 0,
  });

  const directionProperty = isHorizontal
    ? { margin: "marginLeft", param: "width" }
    : { margin: "marginTop", param: "height" };
  const height = ref?.current?.clientHeight;
  const width = ref?.current?.clientWidth;
  const moveStyle = {
    [directionProperty.margin]: `${
      -(sliderSizes[directionProperty.param] + Number(!isHorizontal)) * index
    }px`,
  };

  useEffect(() => {
    if (height && width) setSliderSizes({ height, width });
  }, [height, width]);

  return moveStyle;
}

export function useBackgroundResize() {
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  return {
    backgroundSize: windowWidth > windowHeight ? "100% auto" : "auto 120%",
  };
}
