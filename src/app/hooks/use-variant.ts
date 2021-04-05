import { useContext } from "react";
import { DataContext } from "../components/data-provider/data-provider";

export const useVariant = () => {
  const { variant, activeVariants, setActiveVariants } = useContext(
    DataContext
  );
  return { variant, activeVariants, setActiveVariants };
};
