export interface FrameType {
  frameId: string;
  [s: string]: any;
}

export interface VariantType {
  creativeList?: [
    {
      id: string;
      workingData: {
        frames: FrameType;
      };
    }
  ];
}

export type ColumnsType = Record<string, unknown>[];
