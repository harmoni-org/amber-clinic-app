import SectionBox from "../../components/UI/SectionBox/SectionBox";
import { useTranslation } from "react-i18next";

const Blog: React.FC = () => {
  const { t } = useTranslation();
  return (
    <SectionBox id="blog" title="BLOG">
      <article>
        <div className="text">Welcome to Blog page!</div>
      </article>
    </SectionBox>
  );
};

export default Blog;
