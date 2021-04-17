import React from "react";
import cx from "classnames";
import Dot from "./Dot";
import classes from "./DotNavigation.module.scss";

export default function DotNavigation({ size, activeIndex, onDotSelect }) {
  return (
    <div className={classes.DotNavigation}>
      {Array(size)
        .fill(null)
        .map((el, index) => {
          return (
            <Dot
              key={`dot-navigation${index}`}
              className={cx({ [classes.Active]: activeIndex === index })}
              onClick={() => onDotSelect(index)}
            />
          );
        })}
    </div>
  );
}
