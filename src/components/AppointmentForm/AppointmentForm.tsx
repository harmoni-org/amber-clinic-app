import { useTranslation } from "react-i18next";
import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import { Typography } from "@mui/material";

const AppointmentForm = () => {
  const { t } = useTranslation();

  return (
    <SwipeableTemporaryDrawer
      buttonLabel={t("appointment_form_fields.ONLINE_APPOINTMENT")}
    >
        <>
            <Typography variant="h5">{t("appointment_form_fields.ONLINE_APPOINTMENT")}</Typography>
            <Typography variant="subtitle2">{t("appointment_form_fields.ONLINE_APPOINTMENT_DESCRIPTION")}</Typography>
            <ContactUsForm formOrigin={"appointment"}></ContactUsForm>
        </>
    </SwipeableTemporaryDrawer>
  );
};

export default AppointmentForm;
