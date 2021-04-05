import { getData } from "./get-data";
import { VariantType } from "../types";

export const getVariants = () => getData<VariantType>("/variant");
