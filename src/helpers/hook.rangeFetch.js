import { useState } from "react";

export function useRangeFetch(fetchMaxIndex, isLoop = false) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function setNextIndex(direction) {
    setCurrentIndex((currentIndex) => getNextIndex(currentIndex + direction));
  }

  function setIndex(index) {
    if (currentIndex === index) return;
    setCurrentIndex(getNextIndex(index));
  }

  function getNextIndex(nextIndex) {
    if (nextIndex >= 0 && nextIndex <= fetchMaxIndex) return nextIndex;
    if (isLoop) return nextIndex < 0 ? fetchMaxIndex : 0;
    return nextIndex < 0 ? 0 : fetchMaxIndex;
  }

  return { currentIndex, setNextIndex, setIndex };
}
