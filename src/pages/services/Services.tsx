import SectionBox from "../../components/UI/SectionBox/SectionBox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ServiceCard from "../../components/UI/ServiceCard/ServiceCard";

interface Props {
  data: ServiceItem[];
}

export interface ServiceItem {
  id: number,
  title: { rendered: string},
  content: { rendered: string},
  categories: number[],
  slug: string,
  excerpt: {rendered: string},
}

const Services = (props: Props) => {

  return (
    <SectionBox id="services" title="SERVICES">
      <Box sx={{ width: "90%" }}>
      <Grid container rowSpacing={3} columnSpacing={2} sx={{ width: "100%" }}>
        {props.data.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <ServiceCard key={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </SectionBox>
  );
};

export default Services;
