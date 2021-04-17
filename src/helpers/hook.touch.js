import { useState } from "react";

export function useSwipe(fn, offsetToFiring, isHorizontal, exceptionFn = null) {
  const axleName = isHorizontal ? "clientX" : "clientY";
  const [startCoordinates, setStartCoordinates] = useState({
    clientX: 0,
    clientY: 0,
  });
  const [offsetDirection, setOffsetDirection] = useState(null);

  function touchStartHandler(event) {
    if (exceptionFn && !exceptionFn(event)) return;
    const { [axleName]: currentPosition } = event.touches[0];
    setStartCoordinates({ [axleName]: currentPosition });
  }

  function touchMoveHandler(event) {
    if (exceptionFn && !exceptionFn(event)) return;
    const { [axleName]: currentPosition } = event.touches[0];
    const offset = currentPosition - startCoordinates[axleName];
    if (Math.abs(offset) > offsetToFiring) {
      setOffsetDirection(-Math.sign(offset));
    }
  }

  function touchEndHandler() {
    if (offsetDirection) {
      setOffsetDirection(null);
      fn(offsetDirection);
    }
  }

  return {
    onTouchStart: touchStartHandler,
    onTouchMove: touchMoveHandler,
    onTouchEnd: touchEndHandler,
  };
}
