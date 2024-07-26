import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../components/Header";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("NGO Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  address: Yup.string().required("Address is required"),
  location: Yup.string().required("Location is required"),
  pincode: Yup.string().required("Pincode is required"),
  mobile: Yup.string().required("Mobile Number is required"),
  volunteers: Yup.string().required("Volunteer details are required"),
});

const NGORegistrationPage = () => {
  const handleSubmit = (values) => {
    // Handle form submission
    console.log("NGO Details:", values);
  };

  return (
    <>
      <Header />
      <div className="registration-container">
        <h1>NGO Registration</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            address: "",
            location: "",
            pincode: "",
            mobile: "",
            volunteers: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="registration-form">
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
                <label htmlFor="password">Password:</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <Field type="text" id="address" name="address" />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <Field type="text" id="location" name="location" />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pincode">Pincode:</label>
                <Field type="text" id="pincode" name="pincode" />
                <ErrorMessage
                  name="pincode"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number:</label>
                <Field type="text" id="mobile" name="mobile" />
                <ErrorMessage name="mobile" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="volunteers">Volunteers (Name & Contact):</label>
                <Field as="textarea" id="volunteers" name="volunteers" />
                <ErrorMessage
                  name="volunteers"
                  component="div"
                  className="error"
                />
              </div>
              <button type="submit" className="btn" disabled={isSubmitting}>
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default NGORegistrationPage;
