/* eslint-disable react/prop-types */
import { Visibility } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useMemo } from "react";
import StatusBadge from "./StatusBadge";
import { MaterialReactTable } from "material-react-table";

function CasesTable({ data, handleEdit }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 50,
      },
      {
        accessorKey: "animalType",
        header: "Animal Type",
        size: 150,
      },
      {
        accessorKey: "injuryDescription",
        header: "Injury Description",
        size: 200,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
        sortType: (a, b) => {
          const statusOrder = {
            Recoverd: 1,
            "Under Care": 2,
            "New case": 3,
          };
          return (statusOrder[a] || 0) - (statusOrder[b] || 0);
        },
        Cell: ({ cell }) => <StatusBadge status={cell.getValue()} />,
      },
      {
        id: "actions",
        header: "Actions",
        size: 100,
        Cell: ({ row }) => (
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <button
              style={{
                padding: "0.5rem",
                fontSize: ".8rem",
                fontWeight: "700",
              }}
              className="d-flex items-center btn-outlined"
              color="hsl(129, 61%, 52%)"
              onClick={() => handleEdit(row.original)}
            >
              <Visibility fontSize="10px" />
              View
            </button>
          </Box>
        ),
      },
    ],
    []
  );
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableSorting
      enableColumnFilterModes
      enableGlobalFilter
      enablePagination
      muiTablePaperProps={{
        elevation: 2,
        sx: { borderRadius: "10px", border: "1px solid #ddd" },
      }}
    />
  );
}

export default CasesTable;
