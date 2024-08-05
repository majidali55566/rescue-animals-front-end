import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import LocationSelector from "../location/LocationSelector";
import StyledDropzone from "../StyledDropZone";
import { Button } from "@mui/material";

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  animalType: Yup.string().required("Type of animal is required."),
  injuryDescription: Yup.string().required(
    "Description of injury is required."
  ),
  location: Yup.object().shape({
    lat: Yup.number().required("Location is required."),
    lng: Yup.number().required("Location is required."),
  }),
  reporterName: Yup.string().required("Name is required."),
  reporterEmail: Yup.string()
    .email("Email is invalid.")
    .required("Email is required."),
  reporterContact: Yup.string().required("Contact is required."),
});

const ReportIncidentForm = () => {
  // Define state variables for form inputs
  const [images, setImages] = useState([]);

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append("animalType", values.animalType);
    formData.append("injuryDescription", values.injuryDescription);
    images.forEach((file) => formData.append("images", file));
    formData.append("location", JSON.stringify(values.location));
    formData.append("reporterName", values.reporterName);
    formData.append("reporterEmail", values.reporterEmail);
    formData.append("reporterContact", values.reporterContact);

    console.log("Form submitted:", formData);

    // Clear form fields
    resetForm();
    setImages([]);
    setSubmitting(false);
  };

  // Handle image drop
  const handleDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    setImages((prevImages) => [...prevImages, ...acceptedFiles]);
  };

  // Handle image removal
  const handleRemove = (fileToRemove) => {
    console.log(fileToRemove);
    setImages((prevImages) =>
      prevImages.filter((file) => file !== fileToRemove)
    );
  };

  return (
    <div id="report-section" className="report-incident">
      <h2 className="text-center">Report an Incident now</h2>

      <Formik
        initialValues={{
          animalType: "",
          injuryDescription: "",
          location: { lat: "", lng: "" },
          reporterName: "",
          reporterEmail: "",
          reporterContact: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form className="d-flex flex-column gap-400">
            <div className="animal-info-container">
              <h3>Animal Information</h3>
              <div className="d-flex flex-column gap-400">
                <div className="d-flex flex-column">
                  <label htmlFor="animalType">Animal Name</label>
                  <Field
                    id="animalType"
                    name="animalType"
                    type="text"
                    placeholder="Enter animal name"
                  />
                  <ErrorMessage
                    name="animalType"
                    component="p"
                    className="error"
                  />
                </div>

                <div className="d-flex flex-column">
                  <label htmlFor="injuryDescription">
                    Description of injury
                  </label>
                  <Field
                    id="injuryDescription"
                    name="injuryDescription"
                    as="textarea"
                    placeholder="Enter description of injury..."
                  />
                  <ErrorMessage
                    name="injuryDescription"
                    component="p"
                    className="error"
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="images">Upload injured animal pics</label>
                  <StyledDropzone
                    onDrop={handleDrop}
                    maxFiles={10}
                    cloudinaryUploadUrl={`https://api.cloudinary.com/v1_1/${
                      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
                    }/upload`}
                    cloudinaryDeleteUrl={`https://api.cloudinary.com/v1_1/${
                      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
                    }/image/destroy`}
                    cloudinaryPreset="animal_rescue"
                    onRemove={handleRemove}
                  />
                </div>
              </div>
            </div>

            <div className="location-container d-flex flex-column">
              <h3>Location of incident</h3>
              <LocationSelector
                onSelectLocation={(location) =>
                  setFieldValue("location", location)
                }
              />
              <ErrorMessage
                name="location.lat"
                component="p"
                className="error"
              />
              <ErrorMessage
                name="location.lng"
                component="p"
                className="error"
              />
            </div>

            <div className="reporter-container d-flex flex-column gap-400">
              <h3>Reporter information</h3>
              <div className="d-flex flex-column justify-between gap-400">
                <div className="d-flex flex-column">
                  <label htmlFor="reporterName">Your Full name</label>
                  <Field
                    type="text"
                    id="reporterName"
                    name="reporterName"
                    placeholder="Enter full name"
                  />
                  <ErrorMessage
                    name="reporterName"
                    component="p"
                    className="error"
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="reporterEmail">Your email</label>
                  <Field
                    type="email"
                    id="reporterEmail"
                    name="reporterEmail"
                    placeholder="Enter your email address"
                  />
                  <ErrorMessage
                    name="reporterEmail"
                    component="p"
                    className="error"
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="reporterContact">Your contact</label>
                  <Field
                    type="text"
                    id="reporterContact"
                    name="reporterContact"
                    placeholder="Enter your contact number"
                  />
                  <ErrorMessage
                    name="reporterContact"
                    component="p"
                    className="error"
                  />
                </div>
                <Button
                  sx={{ color: "white" }}
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit now
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReportIncidentForm;
