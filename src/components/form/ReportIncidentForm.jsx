import { useState } from "react";
import LocationSelector from "../location/LocationSelector";
import StyledDropzone from "../StyledDropZone";
import { Button } from "@mui/material";
function ReportIncidentForm() {
  // Define state variables for form inputs
  const [animalType, setAnimalType] = useState("");
  const [injuryDescription, setInjuryDescription] = useState("");
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [reporterName, setReporterName] = useState("");
  const [reporterEmail, setReporterEmail] = useState("");

  // Define state variables for validation errors
  const [errors, setErrors] = useState({
    animalType: "",
    injuryDescription: "",
    location: "",
    reporterName: "",
    reporterEmail: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "type":
        setAnimalType(value);
        break;
      case "description":
        setInjuryDescription(value);
        break;
      case "name":
        setReporterName(value);
        break;
      case "email":
        setReporterEmail(value);
        break;
      default:
        break;
    }
  };
  const handleDrop = (acceptedFiles) => {
    setImages((prevImages) => [...prevImages, ...acceptedFiles]);
  };

  const handleRemove = (fileToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((file) => file !== fileToRemove)
    );
  };

  // Validate form inputs
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      animalType: "",
      injuryDescription: "",
      location: "",
      reporterName: "",
      reporterEmail: "",
    };

    if (!animalType) {
      newErrors.animalType = "Type of animal is required.";
      isValid = false;
    }
    if (!injuryDescription) {
      newErrors.injuryDescription = "Description of injury is required.";
      isValid = false;
    }
    if (!location.lat || !location.lng) {
      newErrors.location = "Location is required.";
      isValid = false;
    }
    if (!reporterName) {
      newErrors.reporterName = "Name is required.";
      isValid = false;
    }
    if (!reporterEmail) {
      newErrors.reporterEmail = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(reporterEmail)) {
      newErrors.reporterEmail = "Email is invalid.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append("animalType", animalType);
    formData.append("injuryDescription", injuryDescription);
    images.forEach((file) => formData.append("images", file));
    formData.append("location", JSON.stringify(location));
    formData.append("reporterName", reporterName);
    formData.append("reporterEmail", reporterEmail);

    console.log("Form submitted:", formData);

    // Clear form fields
    setAnimalType("");
    setInjuryDescription("");
    setImages([]);
    setLocation({ lat: "", lng: "" });
    setReporterName("");
    setReporterEmail("");
  };

  return (
    <div id="report-section" className="report-incident">
      <h2 className="text-center">Report an Incident now</h2>

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-400">
        <div className="animal-info-container">
          <h3>Animal Information</h3>
          <div className="d-flex flex-column gap-400">
            <div className="d-flex flex-column">
              <label htmlFor="type">Animal Name</label>
              <input
                id="type"
                type="text"
                value={animalType}
                onChange={handleInputChange}
                placeholder="Enter animal name"
              />
              {errors.animalType && (
                <p className="error">{errors.animalType}</p>
              )}
            </div>

            <div className="d-flex flex-column">
              <label htmlFor="description">Description of injury</label>
              <textarea
                id="description"
                value={injuryDescription}
                onChange={handleInputChange}
                placeholder="enter description of injury..."
              />
              {errors.injuryDescription && (
                <p className="error">{errors.injuryDescription}</p>
              )}
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="images">Upload injured animal pics</label>
              <StyledDropzone
                onDrop={handleDrop}
                files={images}
                onRemove={handleRemove}
              />
            </div>
          </div>
        </div>

        <div className="location-container d-flex flex-column">
          <h3>Location of incident</h3>
          <LocationSelector onSelectLocation={setLocation} />
          {errors.location && <p className="error">{errors.location}</p>}
        </div>

        <div className="reporter-container d-flex flex-column gap-400">
          <h3>Reporter information</h3>
          <div className="d-flex flex-column justify-between gap-400">
            <div className="d-flex flex-column">
              <label htmlFor="name">Your Full name</label>
              <input
                type="text"
                id="name"
                value={reporterName}
                onChange={handleInputChange}
                placeholder="Enter full name"
              />
              {errors.reporterName && (
                <p className="error">{errors.reporterName}</p>
              )}
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                value={reporterEmail}
                onChange={handleInputChange}
                placeholder="Enter your email address"
              />
              {errors.reporterEmail && (
                <p className="error">{errors.reporterEmail}</p>
              )}
            </div>
            <Button sx={{ color: "white" }} variant="contained">
              Submit now
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReportIncidentForm;
