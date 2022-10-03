import SectionBox from "../../components/UI/SectionBox/SectionBox";
import ContactUsForm from "./ContactUsForm";

const Contact: React.FC = () => {
  return (
    <SectionBox id="contact" title="İLETİŞİM">
      <article>
        <div className="text">Welcome to Contact page!</div>
      </article>
      <ContactUsForm />
    </SectionBox>
  );
};

export default Contact;
