import { Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import './Titles.css'
const titlesData = [
  {
    titleNumber: "NGL931799",
    propertyAddress: "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
    tenure: "Leasehold",
    xCoordinate: -0.108098777,
    yCoordinate: 51.5201911
  },
  {
    titleNumber: "BB15891",
    propertyAddress: "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
    tenure: "Leasehold",
    xCoordinate: -0.108098777,
    yCoordinate: 51.5201911
  },
  {
    titleNumber: "AGL250417",
    propertyAddress: "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
    tenure: "Leasehold",
    xCoordinate: -0.108098777,
    yCoordinate: 51.5201911
  },
  {
    titleNumber: "LN137710",
    propertyAddress: "Lower Ground Floor, 36-38 Hatton Garden, London (EC1N 8EB)",
    tenure: "Leasehold",
    xCoordinate: -0.108098777,
    yCoordinate: 51.5201911
  },
 ]
const Titles = () => {
  const columns: GridColDef[] = [
    { field: 'titleNumber', headerName: 'Title Number', flex: 1 },
    { field: 'tenure', headerName: 'Tenure', flex: 1 },
  ];
  
  return (
    <>
    <Typography>All Titles</Typography>
     <div className="titlesContainer">
      <DataGrid
        getRowId={(row) => row.titleNumber}
        rows={titlesData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
      />
    </div>
    </>
   
  )
}

export default Titles