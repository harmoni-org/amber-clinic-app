import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ServiceCard from "../UI/ServiceCard/ServiceCard";

//  TODO:  Oğuzhan will implement static data mapping, after that this constant will be removed.
const SERVICES = [
  {
    id: 1,
    name: "İmplant Tedavisi",
    shortDesc:
      "İmplant; eksik dişlerin yerine çene kemiği içerisine yerleştirilen titanyum vidadır.",
    longDescription: "",
    imgName: "implant",
  },
  {
    id: 2,
    name: "Gülüş Tasarımı",
    shortDesc:
      "Gülüş tasarımı görsel olarak güzel ve daha beyaz dişlerle mükemmel bir gülüşe kavuşmanızı sağlar.",
    longDescription: "",
    imgName: "smile-design",
  },
  {
    id: 3,
    name: "Pedodonti",
    shortDesc:
      "Pedodonti yani çocuk diş hekimliği 0-14 yaş arası çocukların diş tedavilerini yapmaktır.",
    longDescription: "",
    imgName: "pedodontics",
  },
  {
    id: 4,
    name: "Protez Tedavileri",
    shortDesc:
      "Protez tedavileri, çeşitli nedenlerle kaybedilen dişlerin yerine protezler kullanarak fonksiyon ve estetiğin yeniden sağlamasıdır.",
    longDescription: "",
    imgName: "prosthesis",
  },
  {
    id: 5,
    name: "Ortodonti",
    shortDesc:
      "Ortodonti, dişlerin diziliminde bulunan bozukluk ve çapraşıklıkların düzenlenmesini sağlar.",
    longDescription: "",
    imgName: "orthodontics",
  },
  {
    id: 6,
    name: "Endodonti",
    shortDesc:
      "Endodonti yani kanal tedavisi bölümü kök sinir dokuları enfekte olmuş dişin kurtarılmasını amaçlar.",
    longDescription: "",
    imgName: "endodontics",
  },
  {
    id: 7,
    name: "Diş Beyazlatma",
    shortDesc:
      "Diş beyazlatma işlemi çeşitli ajanlar kullanarak dişlerin renk tonunun açılması işlemidir.",
    longDescription: "",
    imgName: "teeth-whitening",
  },
  {
    id: 8,
    name: "Çene Cerrahisi",
    shortDesc:
      "Ağız, Diş ve Çeneleri içine alan tüm cerrahi girişimleri içine almaktadır.",
    longDescription: "",
    imgName: "oral-maxillofacial-surgery",
  },
  {
    id: 9,
    name: "Periodontoloji",
    shortDesc:
      "Periodontoloji yani diş eti hastalıkları bölümü diş ve çevre dokuların sağlığının idame ettirilmesini sağlayan bölümdür.",
    longDescription: "",
    imgName: "periodontal",
  },
  {
    id: 10,
    name: "2D 3D Görüntüleme",
    shortDesc:
      "2D-3D Görüntüleme Yöntemlerini, 2 boyutlu dental panoramik röntgenler, ve 3 boyutlu dental bilgisayarlı tomografiler oluşturmaktadır.",
    longDescription: "",
    imgName: "2D-3D-scans",
  },
];

const ServiceList: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ width: "100%" }}
      >
        {SERVICES.map((item) => (
          <Grid item xs={1} sm={3} md={3} key={item.id}>
            <ServiceCard
              key={item.id}
              id={item.id}
              name={item.name}
              imageName={item.imgName}
              shortDesc={item.shortDesc}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceList;
