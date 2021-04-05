import { getData } from "./get-data";
import { ColumnsType } from "../types";

export const getColumns = () => getData<ColumnsType>("/columns");
