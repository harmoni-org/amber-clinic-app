import { useTranslation } from "react-i18next";
import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const AppointmentForm = () => {
  const { t } = useTranslation();

  return (
    <SwipeableTemporaryDrawer
      buttonLabel={t("appointment_form_fields.ONLINE_APPOINTMENT")}
    >
      <>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">
            {t("appointment_form_fields.ONLINE_APPOINTMENT")}
          </Typography>
          <CloseIcon />
        </Box>
        <Typography variant="subtitle2">
          {t("appointment_form_fields.ONLINE_APPOINTMENT_DESCRIPTION")}
        </Typography>
        <ContactUsForm formOrigin={"appointment"}></ContactUsForm>
      </>
    </SwipeableTemporaryDrawer>
  );
};

export default AppointmentForm;
