import Box from "@mui/material/Box";
import DentistCard from "../UI/DentistCard/DentistCard";
import "./DentistList.scss";

//  TODO:  Oğuzhan will implement static data mapping, after that this constant will be removed.
const DENTISTS = [
  {
    id: 1,
    name: "Dt. Mehmet Ertuğrul Soysal",
    specialist: "Diş Hekimi",
    imgUrl: "../../../assets/images/dentists/miray-uz.png",
  },
  {
    id: 2,
    name: "Doç. Dr. Osman Sami Ağlarcı",
    specialist: "Ortodonti Uzmanı",
    imgUrl: "../../../assets/images/dentists/miray-uz.png",
  },
  {
    id: 3,
    name: "Dt. Miray Uz",
    specialist: "Diş Hekimi",
    imgUrl: "../../../assets/images/dentists/miray-uz.png",
  },
  {
    id: 4,
    name: "Dt. Mesut Kahraman",
    specialist: "Diş Hekimi",
    imgUrl: "../../../assets/images/dentists/miray-uz.png",
  },
  {
    id: 5,
    name: "Dt. Volkan Arıkan",
    specialist: "Çene Cerrahisi",
    imgUrl: "../../../assets/images/dentists/miray-uz.png",
  },
];
const DentistList: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        p: 1,
        m: 1,
      }}
    >
      {DENTISTS.map((item) => (
        <DentistCard
          key={item.id}
          id={item.id}
          name={item.name}
          imgUrl={item.imgUrl}
          specialist={item.specialist}
        />
      ))}
    </Box>
  );
};

export default DentistList;
