import React from "react";
import { useVariant } from "../../hooks/use-variant";
import { Switch } from "./switch";
import css from "./switch.module.css";

export const VariantSwitcher = () => {
  const { variant } = useVariant();
  const creativeItem = variant?.creativeList?.find((item) => item.workingData);
  const frames = creativeItem?.workingData?.frames || ({} as any);

  return (
    <div>
      {Object.entries(frames).map(([key, item], index) => (
        <div key={index} className={css["variant-wrapper"]}>
          {key}
          <Switch key={index} value={item} />
        </div>
      ))}
    </div>
  );
};
