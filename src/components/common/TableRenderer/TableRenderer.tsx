import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { Title } from "../../../models/Title";
interface TableRendererProps {
  titleResults: Title[]
  setPage: (page: number) => void
  navigateTo: (titleNumber: number) => void
  currentPage: number
}
const TableRenderer = ({ titleResults, setPage, currentPage, navigateTo }: TableRendererProps) => {
  const columns: GridColDef[] = [
    { field: "titleNumber", headerName: "Title Number", flex: 1 },
    { field: "tenure", headerName: "Tenure", flex: 1 },
  ];

  useEffect(() => {
    setPage(0)
  }, [currentPage > Math.ceil(21 / 5) - 1])
  
  const setInitialPage = () => {
    if(currentPage > Math.ceil(21 / 5) - 1) {
      return 0
    }
    return currentPage
  }
  return (
    <>
      <DataGrid
        initialState={{
          pagination: {
            page: setInitialPage()
          }
        }}
        getRowId={(row) => row.titleNumber}
        rows={titleResults}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        onPageChange={(page) => setPage(page)}
        onRowClick={(title) => navigateTo(title.row.titleNumber)}
      />
    </>
  );
};

export default TableRenderer;
