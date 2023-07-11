import * as React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import DataTable from "../../util/DataTable";

const data = [
  { fromUnit: "inches",
    toUnit: "millimetres (mm)",
    factor: 25.4},
  { fromUnit: "feet",
    toUnit: "centimetres (cm)",
    factor: 30.48},
  { fromUnit: "yards",
    toUnit: "metres (m)",
    factor: 0.91444}
];

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("fromUnit", {
    cell: (info) => info.getValue(),
    header: "To convert"
  }),
  columnHelper.accessor("toUnit", {
    cell: (info) => info.getValue(),
    header: "Into"
  }),
  columnHelper.accessor("factor", {
    cell: (info) => info.getValue(),
    header: "Multiply by",
    meta: {
      isNumeric: true
    }
  })
];

export default function App() {
  return (
    <DataTable columns={columns} data={data} />
  );
};