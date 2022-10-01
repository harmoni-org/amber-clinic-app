import SectionBox from "../../components/UI/SectionBox/SectionBox";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <SectionBox id="contact" title="İLETİŞİM">
      <article>
        <div className="text">Welcome to Contact page!</div>
      </article>
    </SectionBox>
  );
};

export default Contact;
