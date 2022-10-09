import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DentistCard from "../UI/DentistCard/DentistCard";
import Content from "../ContentRenderer/content.json";

const DentistList: React.FC = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        width: "90%",
      }}
    >
      <Grid container columnSpacing={3} sx={{ width: "100%" }}>
        {Content.dentists.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <DentistCard key={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DentistList;
