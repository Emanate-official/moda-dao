import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const defaultTdStyle = {
  overflowWrap: "break-word",
  wordWrap: "break-word",
  whiteSpace: "normal",
  wordBreak: "break-word"
};

const Table = ({ columnConfig = {}, hidden = [], ...props }) => (
  <BootstrapTable
    striped
    hover
    version="4"
    pagination
    tableContainerClass="table-responsive"
    keyField="id"
    {...props}
  >
    {Object.keys(columnConfig)
      .filter(dataField => hidden.indexOf(dataField) < 0)
      .map(dataField => {
        const { tdStyle, thStyle, ...config } = columnConfig[dataField];
        return (
          <TableHeaderColumn
            key={dataField}
            dataField={dataField}
            dataSort
            thStyle={{ ...defaultTdStyle, ...thStyle }}
            tdStyle={{ ...defaultTdStyle, ...tdStyle }}
            {...config}
          />
        );
      })}
  </BootstrapTable>
);

export default Table;
