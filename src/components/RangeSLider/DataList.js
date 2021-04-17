import React from "react";
import classes from "./styles/RangeSlider.module.scss";

export default function DataList({ data = [], id }) {
  return (
    <datalist id={id} className={classes.RangeDataList}>
      {data.map(({ title }, index) => {
        return (
          <option
            key={`dataListOpt${id}${index}`}
            value={(index * 100) / (data.length - 1)}
          >
            {title ? title : null}
          </option>
        );
      })}
    </datalist>
  );
}
