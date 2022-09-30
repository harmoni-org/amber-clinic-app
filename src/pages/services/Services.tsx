import SectionBox from "../../components/UI/SectionBox/SectionBox";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const { t } = useTranslation();
  return (
    <SectionBox id="services" title="HİZMETLERİMİZ">
      <article>
        <div className="text">Welcome to Services page!</div>
      </article>
    </SectionBox>
  );
};

export default Services;
