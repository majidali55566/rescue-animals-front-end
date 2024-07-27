import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import StatusBadge from "./StatusBadge";
import { CheckCircle, Email, Person, Phone } from "@mui/icons-material";
import LocationMarker from "../location/LocationMarker";
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
        "@media (max-width: 600px)": {
          padding: "0.5rem",
        },
      },
      "& .MuiDialogActions-root": {
        padding: "1rem",
        "@media (max-width: 600px)": {
          padding: "0.5rem",
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
      <h2>Animal: {caseData?.animalType}</h2>
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
        <p className="fs-800">Injury Description:</p>
        <p className="fs-800">{caseData?.injuryDescription}</p>
      </div>
      <div className="d-flex flex-column gap-400">
        <p className="fs-800">Location of injured Animal</p>
        <LocationMarker caseLocation={caseData?.location} />
      </div>
      <p className="fs-800">Images of Injured animal</p>
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
          <p style={{ color: "black" }} className="fs-700">
            Reporter Information
          </p>
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
      <Button onClick={onClose} color="secondary">
        Cancel
      </Button>

      {caseData?.status === "UnderCare" && (
        <button className="btn">Mark Recoverd</button>
      )}

      {caseData?.status === "New case" && (
        <button className="btn" onClick={onSave}>
          Rescue now
        </button>
      )}
    </DialogActions>
  </Dialog>
);

export default CaseDetailsModal;
