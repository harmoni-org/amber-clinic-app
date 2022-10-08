import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ServiceCard from "../UI/ServiceCard/ServiceCard";
import BlogCard from "../UI/BlogCard/BlogCard";

//  TODO:  Oğuzhan will implement static data mapping, after that this constant will be removed.
const BLOG = [
  {
    id: 1,
    title: "Ağız Kokusu Neden Olur?",
    longDescription: "",
    imgName: "bad-breath",
  },
  {
    id: 2,
    title: "Diş Dolgusu Sonrası Dikkat Edilmesi Gerekenler",
    longDescription: "",
    imgName: "tooth-filling",
  },
  {
    id: 3,
    title: "Kimler Dişeti Ameliyatı Yaptırmalıdır?",
    longDescription: "",
    imgName: "dental-surgery",
  },
  {
    id: 4,
    title: "Kanal Tedavisi Sonrasında Ağrı Olur Mu?i",
    longDescription: "",
    imgName: "root-channel",
  },
  {
    id: 5,
    title: "Kimler İmplant Yaptırmalıdır?",
    longDescription: "",
    imgName: "dental-implant",
  },
  {
    id: 6,
    title: "Dişinizde Çürük Varsa Tedavisini Geciktirmeyin",
    longDescription: "",
    imgName: "delay-treatment",
  },
  {
    id: 7,
    title: "Porselen Diş Yaptırmak Sağlığa Zararlı mıdır?",
    longDescription: "",
    imgName: "porcelain-crowns",
  },
  {
    id: 8,
    title: "Diş Teli Temizliği ve Bakımı Nasıl Olmalıdır?",
    longDescription: "",
    imgName: "cleaning",
  },
  {
    id: 9,
    title: "Ortodontik Tedavi Süreci Nasıl İlerlemektedir?",
    longDescription: "",
    imgName: "orthodontic",
  },
  {
    id: 10,
    title: "Eğri Dişler İçin Uygulanabilecek Tedaviler",
    longDescription: "",
    imgName: "crooked-teeth",
  },
  {
    id: 11,
    title: "Kimler için Sedasyon Uygulanmalıdır?",
    longDescription: "",
    imgName: "sedation",
  },
  {
    id: 12,
    title: "Diş Eti Şikayetiniz Varsa Tedavisini İhmal Etmeyin!",
    longDescription: "",
    imgName: "gum-diseases",
  },
  {
    id: 13,
    title: "Diş Protezi Çeşitleri Nelerdir?",
    longDescription: "",
    imgName: "tooth-prostheses",
  },
  {
    id: 14,
    title: "Gülüş Estetiği ile Estetik Bir Gülüşe Sahip Olun",
    longDescription: "",
    imgName: "smile-design",
  },
];

const BlogList: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }} textAlign="left">
      <Grid container rowSpacing={6} columnSpacing={6}>
        {BLOG.map((item) => (
          <Grid item xs={1} sm={4} md={4} key={item.id}>
            <BlogCard
              key={item.id}
              id={item.id}
              title={item.title}
              imageName={item.imgName}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogList;
