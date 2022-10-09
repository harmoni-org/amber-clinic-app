import React, { useState } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AlertBar from "../UI/AlertBar/AlertBar";
import { AlertColor } from "@mui/material/Alert";
import { sendEmail } from "../Utils/emailUtils";
import useValidationBuilder from "./useValidationBuilder";
import { useTranslation } from "react-i18next";

export interface ContactInfo {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface ContactUsFormProps {
  formOrigin: string
}

const ContactUsForm : React.FC<ContactUsFormProps> = (props) => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);
  const [hideDuration, setHideDuration] = useState<number | null>(null);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const validationSchema = useValidationBuilder();
  const { t } = useTranslation();

  const showAlertMessage = (sev:AlertColor, hide_duration:number, alert_message:string) => {
    setShowAlert(true);
    setSeverity(sev);
    setHideDuration(hide_duration);
    setAlertMessage(alert_message);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowAlert(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: validationSchema || null,
    onSubmit: (values:ContactInfo) => {
      sendEmail(values, showAlertMessage);
      formik.resetForm();
    },
  });

  return (
    <div>
      <AlertBar
        showAlert={showAlert}
        severity={severity}
        hideDuration={hideDuration}
        alertMessage={alertMessage}
        handleClose={handleClose}
      />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label={t("contact_form_fields.NAME")}
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
          label={t("contact_form_fields.EMAIL")}
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
          label={t("contact_form_fields.PHONE_NUMBER")}
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          sx={{ marginTop: "1rem" }}
        />
        {props.formOrigin === "contact" ?
          <TextField
            multiline
            fullWidth
            id="message"
            name="message"
            label={t("contact_form_fields.MESSAGE")}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            rows={4}
            sx={{ marginTop: "1rem" }}
          />
        :
        null
        }
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ marginTop: "1rem" }}
        >
          {t("contact_form_fields.SUBMIT")}
        </Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
