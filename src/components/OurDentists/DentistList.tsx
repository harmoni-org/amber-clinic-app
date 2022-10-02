import Box from "@mui/material/Box";
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
        display: "flex",
        justifyContent: "space-around",
        p: 1,
        m: 1
      }}
    >
      {DENTISTS.map((item) => (
        <DentistCard
          key={item.id}
          id={item.id}
          name={item.name}
          imageName={item.imgName}
          specialist={item.specialist}
        />
      ))}
    </Box>
  );
};

export default DentistList;
