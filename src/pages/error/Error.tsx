import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Error: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ p: 30 }} textAlign="left">
      404 |<Typography variant="h5">{t("not_found.TEXT")}</Typography>
      <Button>{t("not_found.BUTTON_TEXT")}</Button>
    </Box>
  );
};

export default Error;
