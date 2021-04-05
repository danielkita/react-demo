import React from "react";
import { DataProvider } from "../components/data-provider/data-provider";
import { Table } from "../components/table/table";
import { VariantSwitcher } from "../components/variant-switcher/variant-switcher";
import { CopyVariants } from "../components/copy-variants/copy-variants";

import css from "./main.module.css";

export const Main = () => (
  <DataProvider>
    <header className={css.header}>
      <VariantSwitcher />
      <CopyVariants />
    </header>
    <Table />
  </DataProvider>
);
