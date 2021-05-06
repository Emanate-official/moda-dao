import React from "react";
import Table from "./Table";

// dataField (key) props (value)
const columnConfig = {
  id: {
    children: "Id",
    width: "15%"
  },
  item: {
    children: "Item"
  },
};

const ExplorerTable = ({ data, ...props }) => (
  <Table
    data={data}
    columnConfig={columnConfig}
    keyField="id"
    {...props}
  />
);

export default ExplorerTable;
