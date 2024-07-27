import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string()
    .email("invalid email address")
    .required("email is required"),
  address: Yup.string().required("address is required"),
  location: Yup.string().required("location is required"),
  mobile: Yup.string().required("mobile is required"),
});

function VolunteerRegisterForm() {
  const handleSubmit = (values) => {
    // Handle form submission
    console.log("NGO Details:", values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        address: "",
        location: "",
        mobile: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="volunteer-register-form">
          <div className="form-group">
            <label htmlFor="name">NGO Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <Field type="text" id="address" name="address" />
            <ErrorMessage name="address" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <Field type="text" id="location" name="location" />
            <ErrorMessage name="location" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Contact no:</label>
            <Field type="text" id="mobile" name="mobile" />
            <ErrorMessage name="mobile" component="div" className="error" />
          </div>
          <button type="submit" className="btn" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default VolunteerRegisterForm;
