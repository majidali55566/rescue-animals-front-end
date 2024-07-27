/* eslint-disable react/prop-types */
import { NotificationsActive } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useMemo } from "react";

const StatusBadge = ({ status }) => {
  const backgroundColor = useMemo(() => {
    switch (status) {
      case "Recoverd":
        return "hsl(129, 61%, 52%)"; // Green
      case "UnderCare":
        return "warning.main"; // Yellow
      case "New":
        return "red";
      default:
        return "grey.500"; // Grey for unknown status
    }
  }, [status]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        gap: ".5rem",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.25rem",
        borderRadius: "0.25rem",
        fontSize: ".6rem",
        backgroundColor: backgroundColor,
        color: "#fff",
        textAlign: "center",
      }}
    >
      {status}
      {status === "New" && (
        <div
          style={{
            display: "inline-block",
          }}
        >
          <NotificationsActive
            style={{
              fontSize: ".7rem",
              color: "white",
              animation: "pulse 1.5s infinite",
            }}
          />
          <style>
            {`
                @keyframes pulse {
                  0% { transform: scale(1); }
                  50% { transform: scale(1.2); }
                  100% { transform: scale(1); }
                }
              `}
          </style>
        </div>
      )}
    </Box>
  );
};

export default StatusBadge;
