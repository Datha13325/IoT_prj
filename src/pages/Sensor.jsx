import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockSensor } from "../data/mockData";

const Sensor = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "statusTime",
      headerName: "Time",
      flex: 1,
    },
    {
      field: "thermometer",
      headerName: "Thermometer",
      flex: 1,
    },
    {
      field: "hygrometer",
      headerName: "Hygrometer",
      flex: 1,
    },
    {
      field: "luxSun",
      headerName: "LuxSun",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      {/* <Header title="INVOICES" subtitle="List of Invoice Balances" /> */}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockSensor} columns={columns} />
      </Box>
    </Box>
  );
};

export default Sensor;
