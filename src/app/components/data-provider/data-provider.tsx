import React, { useEffect, useState } from "react";
import { getVariants } from "../../utils/get-variants";
import { Errors } from "../errors/errors";
import { getColumns } from "../../utils/get-columns";
import { camelcaseKeys } from "../../utils/object-camelcase";
import { ColumnsType, VariantType } from "../../types";

const defaultValues = {
  error: undefined,
  variant: undefined,
  columns: [] as any[],
  activeVariants: [],
  setActiveVariants: () => {},
};

interface Data {
  error?: 401 | 500;
  variant: VariantType | undefined;
  columns: ColumnsType | undefined;
}

type Context = Data & {
  activeVariants: string[];
  setActiveVariants: (variant: string[]) => void;
};

export const DataContext = React.createContext<Context>(defaultValues);

export const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Data>({
    error: undefined,
    variant: undefined,
    columns: [],
  });

  const [activeVariants, setActiveVariants] = useState<string[]>([]);

  const initData = async () => {
    const [variantsResponse, columnsResponse] = await Promise.all([
      getVariants(),
      getColumns(),
    ]);

    setData({
      columns: (columnsResponse.response?.body || []).map(
        camelcaseKeys
      ) as Record<string, unknown>[],
      variant: camelcaseKeys(variantsResponse.response?.body),
      error: columnsResponse.error || variantsResponse.error,
    });
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        ...data,
        activeVariants,
        setActiveVariants,
      }}
    >
      <>
        <Errors type={data.error} />
        {data.variant ? children : "Loading..."}
      </>
    </DataContext.Provider>
  );
};
