import { useTranslation } from "react-i18next";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./SectionBox.scss";

type SectionBoxProps = {
  id: string;
  title: string;
  children: any;
};

const SectionBox: React.FC<SectionBoxProps> = ({ title, children }) => {
  const { t } = useTranslation();

  return (
    <div className="section-container">
      <Divider
        component="div"
        role="presentation"
        sx={{
          color: "primary.dark",
          borderTop: `thin solid primary["700"]`,
          mb: 3,
          letterSpacing: 5,
        }}
      >
        {/* any elements nested inside the role="presentation" preserve their semantics. */}
        <Typography
          variant="h5"
          px={3}
          sx={{
            color: "primary.light",
          }}
        >
          {t(`navbar.${title}`, { ns: "common" })}
        </Typography>
      </Divider>
      <Container
        maxWidth={false}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {children}
      </Container>
    </div>
  );
};

export default SectionBox;
