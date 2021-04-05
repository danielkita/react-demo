import { FrameType } from "../../types";

export const renderItem = (item: any) =>
  typeof item === "object" ? "<image>" : item;

export const getActiveFrame = (frames: FrameType, id: string) => {
  const extracted = (prev: {}, group: FrameType, name: string) => ({
    ...prev,
    [group.frameId]: {
      ...group,
      position: name,
    },
  });

  const mappedFrames = Object.entries<any>(frames).reduce(
    (prev, [name, group]) =>
      Array.isArray(group)
        ? group.reduce((p, g) => extracted(p, g, name), prev)
        : extracted(prev, group, name),
    {} as FrameType
  );

  return mappedFrames[id];
};

export const getColumns = (columns?: any[], activeFrame?: any) =>
  Object.keys(activeFrame?.content || {}).filter((key) =>
    columns?.some(
      (col) =>
        col.keyName === key &&
        !col.isHidden &&
        activeFrame.frameId === col.parentFrameId
    )
  );
