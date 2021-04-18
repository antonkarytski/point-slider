import React from "react";

export default function Slide({ className, children, ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
