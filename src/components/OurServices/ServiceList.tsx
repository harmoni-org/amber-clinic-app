import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ServiceCard from "../UI/ServiceCard/ServiceCard";
import Content from "../ContentRenderer/content.json";

const ServiceList: React.FC = () => {
  return (
    <Box sx={{ width: "90%" }}>
      <Grid container rowSpacing={3} columnSpacing={2} sx={{ width: "100%" }}>
        {Content.services.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <ServiceCard key={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceList;
