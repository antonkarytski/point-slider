import React, { useMemo, useState, useEffect } from "react";
import cx from "classnames";
import classes from "./styles/RangeSlider.module.scss";
import DataList from "./DataList";
import GradientInput from "./styles/GradientInput";

export default function RangeSlider(props) {
  const {
    className,
    currentDotIndex,
    onChange,
    dataList = [],
    classes: APIClasses = {},
    colors = [],
    ...nativeOptions
  } = props;

  const [isCurrentlyChange, setCurrentlyChange] = useState(false);
  const [value, setValue] = useState(dataList[currentDotIndex].dot);
  const listId = useMemo(() => Math.random(), []);

  function onChangeHandler({ target }) {
    const value = Number(target.value);
    setValue(value);
    const currentRangeIndex = dataList.findIndex(({ range }) => {
      return value <= range;
    });
    onChange(value, currentRangeIndex);
  }

  useEffect(() => {
    if (isCurrentlyChange) return;
    const currentValueIndex = dataList.findIndex(({ range }) => value <= range);
    if (currentValueIndex + 1 && currentValueIndex !== currentDotIndex)
      setValue(dataList[currentDotIndex].dot);
  }, [currentDotIndex, value, isCurrentlyChange, dataList]);

  return (
    <div className={className}>
      <GradientInput
        list={listId}
        value={value}
        type={"range"}
        className={cx(classes.RangeSlider, APIClasses.input)}
        onChange={onChangeHandler}
        colors={colors}
        onMouseDown={() => setCurrentlyChange(true)}
        onMouseUp={() =>
          setTimeout(() => {
            setCurrentlyChange(false);
          })
        }
        onTouchStart={() => setCurrentlyChange(true)}
        onTouchEnd={() =>
          setTimeout(() => {
            setCurrentlyChange(false);
          })
        }
        {...nativeOptions}
      />
      {dataList.length ? <DataList data={dataList} id={listId} /> : null}
    </div>
  );
}
