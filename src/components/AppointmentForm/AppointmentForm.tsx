import { useState } from 'react';
import { useTranslation } from "react-i18next";
import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AppointmentForm = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <SwipeableTemporaryDrawer
      buttonLabel={t("appointment_form_fields.ONLINE_APPOINTMENT")}
      onClose={() => setShowDrawer(false)}
      onOpen={() => setShowDrawer(true)}
      showDrawer={showDrawer}
      anchor={"right"}
    >
      <>
        <CloseIcon/>
        <Typography variant="h5">
          {t("appointment_form_fields.ONLINE_APPOINTMENT")}
        </Typography>
        <Typography variant="subtitle2">
          {t("appointment_form_fields.ONLINE_APkPOINTMENT_DESCRIPTION")}
        </Typography>
        <ContactUsForm formOrigin={"appointment"} onSubmit={() => setShowDrawer(false)}></ContactUsForm>
      </>
    </SwipeableTemporaryDrawer>
  );
};

export default AppointmentForm;
