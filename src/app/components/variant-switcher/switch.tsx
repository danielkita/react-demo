import React from "react";
import css from "./switch.module.css";
import { useVariant } from "../../hooks/use-variant";

export const Switch: React.FC<{ value: any }> = ({ value }) => {
  const { setActiveVariants, activeVariants } = useVariant();

  return (
    <div className={css.switch}>
      {Array.isArray(value) ? (
        <div className={css["switch-group"]}>
          {value.map((item) => (
            <Switch key={item.frameId} value={item} />
          ))}
        </div>
      ) : (
        <button
          title={`Set active frame: ${value.frameId}`}
          onClick={() => setActiveVariants([value.frameId])}
          className={activeVariants[0] === value.frameId ? css["active"] : ""}
        />
      )}
    </div>
  );
};
