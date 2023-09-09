import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const formik = useFormik({
    initialValues: { email: "", firstName: "", lastName: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(30, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">firstName</label>
      <input
        type="text"
        id="firstName"
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName && (
        <span>{formik.errors.firstName}</span>
      )}
      <label htmlFor="lastName">lastName</label>
      <input type="text" id="lastName" {...formik.getFieldProps("lastName")} />
      {formik.touched.lastName && formik.errors.lastName && (
        <span>{formik.errors.lastName}</span>
      )}
      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email && (
        <span>{formik.errors.email}</span>
      )}
      <button type="submit">submit</button>
    </form>
  );
}

export default Login;
