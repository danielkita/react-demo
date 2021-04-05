import React from "react";
import { useVariant } from "../../hooks/use-variant";

export const CopyVariants = () => {
  const { activeVariants, setActiveVariants } = useVariant();
  const onClick = () => {
    setActiveVariants([...activeVariants, activeVariants[0]]);
  };
  return (
    <div>
      <button onClick={onClick}>Copy Frames</button>
    </div>
  );
};
