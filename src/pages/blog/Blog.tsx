import BlogList from "../../components/Blog/BlogList";
import SectionBox from "../../components/UI/SectionBox/SectionBox";

const Blog: React.FC = () => {
  return (
    <SectionBox id="blog" title="BLOG">
      <BlogList />
    </SectionBox>
  );
};

export default Blog;
