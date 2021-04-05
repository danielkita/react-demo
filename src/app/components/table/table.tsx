import React, { useMemo } from "react";
import { useVariant } from "../../hooks/use-variant";
import { useColumns } from "../../hooks/use-columns";
import { getActiveFrame, getColumns, renderItem } from "./utils";
import css from "./table.module.css";

export const Table = () => {
  const { variant, activeVariants } = useVariant();
  const columns = useColumns();
  const creativeItem = variant?.creativeList?.find((item) => item.workingData);
  const frames = creativeItem?.workingData?.frames;

  const activeFrames = useMemo(
    () =>
      frames
        ? activeVariants.map((variant) => getActiveFrame(frames, variant))
        : [],
    [frames, activeVariants]
  );

  const activeColumns = useMemo(() => getColumns(columns, activeFrames[0]), [
    columns,
    activeFrames,
  ]);

  const rows = useMemo(
    () => activeFrames.map((item) => item?.content).filter(Boolean),
    [activeFrames]
  );

  return (
    <div className={css.wrapper}>
      <table>
        <thead>
          <tr>
            {activeColumns.sort().map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((group, key) => (
            <tr key={key}>
              {Object.keys(group)
                .sort()
                .map((item: any) =>
                  activeColumns.some((i) => i === item) ? (
                    <td key={item}>{renderItem(group[item])}</td>
                  ) : null
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
