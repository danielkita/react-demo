import { useContext } from "react";
import { DataContext } from "../components/data-provider/data-provider";

export const useColumns = () => {
  const { columns } = useContext(DataContext);
  return columns;
};
