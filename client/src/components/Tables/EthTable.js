import React from "react";
import Table from "./Table";

// dataField (key) props (value)
const columnConfig = {
  id: {
    children: "Owner",
    width: "15%"
  },
  balance: {
    children: "Balance"
  },
  locked: {
    children: "Locked %"
  },
  volume: {
    children: "24 Hour Volume"
  },
};

const EthTable = ({ data, ...props }) => (
  <Table
    data={data}
    columnConfig={columnConfig}
    keyField="id"
    {...props}
  />
);

export default EthTable;
