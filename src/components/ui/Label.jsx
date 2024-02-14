import React from "react";
import { cn } from "../../lib/utills";

const Label = ({ htmlFor = "", children, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-2xl leading-[47px] text-primary font-semibold font-nohemi",
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
