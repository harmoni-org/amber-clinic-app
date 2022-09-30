import { useTranslation } from "react-i18next";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

type SectionBoxProps = {
  id: string;
  title: string;
  children: any;
};

const SectionBox: React.FC<SectionBoxProps> = ({ title, children }) => {
  const { t } = useTranslation();

  return (
    <>
      <Divider
        component="div"
        role="presentation"
        sx={{
          color: "primary.main",
          borderTop: `thin solid primary["700"]`,
        }}
      >
        {/* any elements nested inside the role="presentation" preserve their semantics. */}
        <Typography variant="h5">{t(`${title}`)}</Typography>
      </Divider>
      <article>{children}</article>
    </>
  );
};

export default SectionBox;
