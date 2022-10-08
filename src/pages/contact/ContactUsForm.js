import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNumber: yup
    .string("Enter your phone number")
    .required("Phone number is required")
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g,
      "Invalid phone number"
    ),
  message: yup.string("Enter your message").max(255, "Too Long!"),
});

const serviceId = "service_szot7ev";
const templateId = "template_moqukoh";
const publicKey = "OryHOGs6_QIKpX3Bz";

const sendEmail = (values) => {
  emailjs
    .send(
      serviceId,
      templateId,
      {
        to_name: "Amber Clinic",
        from_name: values.name,
        message: values.message,
        email: values.email,
        phone_number: values.phoneNumber,
        reply_to: "noreply",
      },
      publicKey
    )
    .then(
      (result) => {
        console.log("result: ", result);
        console.log("values: ", values);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "Deniz",
      email: "foobar@example.com",
      phoneNumber: "+1 650 555 12 34",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      sendEmail(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ marginTop: "1rem" }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ marginTop: "1rem" }}
        />
        <TextField
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          label="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          sx={{ marginTop: "1rem" }}
        />
        <TextField
          multiline
          fullWidth
          id="message"
          name="message"
          label="Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          rows={4}
          defaultValue="Enter a message..."
          sx={{ marginTop: "1rem" }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ marginTop: "1rem" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
