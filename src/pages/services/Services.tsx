import ServiceList from "../../components/OurServices/ServiceList";
import SectionBox from "../../components/UI/SectionBox/SectionBox";

const Services: React.FC = () => {
  return (
    <SectionBox id="services" title="SERVICES">
      <ServiceList />
    </SectionBox>
  );
};

export default Services;
