import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import DentistCard from "../UI/DentistCard/DentistCard";
import "./DentistList.scss";

//  TODO:  Oğuzhan will implement static data mapping, after that this constant will be removed.
const DENTISTS = [
  {
    id: 1,
    name: "Dt. Mehmet Ertuğrul Soysal",
    specialist: "Diş Hekimi",
    imgName: "miray-uz",
  },
  {
    id: 2,
    name: "Doç. Dr. Osman Sami Ağlarcı",
    specialist: "Ortodonti Uzmanı",
    imgName: "osman-sami",
  },
  {
    id: 3,
    name: "Dt. Miray Uz",
    specialist: "Diş Hekimi",
    imgName: "miray-uz",
  },
  {
    id: 4,
    name: "Dt. Volkan Arıkan",
    specialist: "Çene Cerrahisi",
    imgName: "volkan-arikan",
  },
];
const DentistList: React.FC = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        width: "90%",
      }}
    >
      <Grid container columnSpacing={3} sx={{ width: "100%" }}>
        {DENTISTS.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <DentistCard
              key={item.id}
              id={item.id}
              name={item.name}
              imageName={item.imgName}
              specialist={item.specialist}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DentistList;
