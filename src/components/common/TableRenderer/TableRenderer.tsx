import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import { Title } from "../../../models/Title";
interface TableRendererProps {
  titleResults: Title[];
}
const TableRenderer = ({ titleResults }: TableRendererProps) => {
  const columns: GridColDef[] = [
    { field: "titleNumber", headerName: "Title Number", flex: 1 },
    { field: "tenure", headerName: "Tenure", flex: 1 },
  ];
  return (
    <>
      <DataGrid
        getRowId={(row) => row.titleNumber}
        rows={titleResults}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
      />
    </>
  );
};

export default TableRenderer;
