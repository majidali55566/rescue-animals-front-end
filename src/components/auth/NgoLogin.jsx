import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../Header";

// Validation schema using Yup
const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const NGOLoginPage = () => {
  const handleLoginSubmit = (values) => {
    // Handle login form submission
    console.log("NGO Login Details:", values);
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={handleLoginSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="login-form">
              <h1>NGO Login</h1>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <div>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
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
              <button type="submit" className="btn" disabled={isSubmitting}>
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default NGOLoginPage;
