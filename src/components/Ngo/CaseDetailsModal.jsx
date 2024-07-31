import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import StatusBadge from "./StatusBadge";
import { CheckCircle, Email, Person, Phone } from "@mui/icons-material";
import AnimalLocator from "../location/AnimalLocator";

import { Carousel } from "react-responsive-carousel";

/* eslint-disable react/prop-types */
const CaseDetailsModal = ({
  open,
  onClose,
  caseData,
  onSave,
  isFullScreen,
}) => (
  <Dialog
    maxWidth="xl"
    open={open}
    onClose={onClose}
    fullScreen={isFullScreen} // Apply fullScreen only on small screens
    fullWidth // Ensure the dialog takes full width
    sx={{
      "& .MuiDialogContent-root": {
        padding: "1rem",
        "@media (min-width: 600px)": {
          padding: "4rem",
        },
      },
      "& .MuiDialogActions-root": {
        padding: "1rem",
        "@media (max-width: 600px)": {
          padding: ".5rem",
        },
      },
    }}
  >
    <DialogTitle
      sx={{
        display: "flex",
        flexDirection: "column",
        "@media (min-width: 600px)": {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
    >
      <h4>Animal: {caseData?.animalType}</h4>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            color: "red",
          },
        }}
      >
        <p>Status</p>
        <StatusBadge status={caseData?.status} />
        {caseData?.status === "Recoverd" && (
          <CheckCircle className="clr-primary-400" />
        )}
      </div>
    </DialogTitle>
    <DialogContent
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        minWidth: "300px",
        // Adjust max width to fit smaller screens
        "@media (max-width: 600px)": {},
      }}
    >
      <div className="d-flex items-center gap-400">
        <h4>Injury Description:</h4>
        <p className="fs-800">{caseData?.injuryDescription}</p>
      </div>
      <div className="d-flex flex-column gap-400">
        <h4>
          {caseData?.status === "New"
            ? "Direction of case from your NGO"
            : "Location"}
        </h4>
        <AnimalLocator
          ngoLocation={{ lat: 27.54534, lng: 68.76278 }}
          animalLocation={{ lat: 27.53457, lng: 68.75948 }}
          status={caseData?.status}
        />
      </div>
      <h4>Images of Injured animal</h4>
      <div className="container">
        <div className="images-container">
          <Carousel showThumbs={true} selectedItem={0}>
            {caseData?.images.map((item, index) => (
              <img
                key={item}
                style={{ objectFit: "cover", maxHeight: "400px" }}
                src={item.url}
                alt={`Animal Image ${index + 1}`}
              />
            ))}
          </Carousel>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <h4>Reporter Information</h4>
          <div className="d-flex items-center">
            <Person />
            {caseData?.reporterInfo.name}
          </div>
          <div className="d-flex items-center">
            <Email />
            {caseData?.reporterInfo.email}
          </div>
          <div className="d-flex items-center">
            <Phone
              style={{
                fontSize: "1.4rem",
                color: "black",
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

            {caseData?.reporterInfo.contactNo}
          </div>
        </div>
      </div>
    </DialogContent>
    <DialogActions
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button onClick={onClose} color="warning">
        Cancel
      </Button>

      {caseData?.status === "UnderCare" && (
        <Button sx={{ color: "white" }} variant="contained" color="primary">
          Mark Recoverd
        </Button>
      )}

      {caseData?.status === "New" && (
        <Button
          sx={{ color: "white" }}
          variant="contained"
          color="warning"
          onClick={onSave}
        >
          Rescue now
        </Button>
      )}
    </DialogActions>
  </Dialog>
);

export default CaseDetailsModal;
