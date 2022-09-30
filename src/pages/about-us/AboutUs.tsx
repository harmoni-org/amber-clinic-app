import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import DentistList from "../../components/OurDentists/DentistList";

const AboutUs: React.FC = () => {
  return (
    <>
      <Divider
        component="div"
        role="presentation"
        sx={{
          color: "primary.main",
          borderTop: `thin solid primary["700"]`,
        }}
      >
        {/* any elements nested inside the role="presentation" preserve their semantics. */}
        <Typography variant="h5">HAKKIMIZDA</Typography>
      </Divider>
      <article>
        <div className="text">
          <p className="blackbox">
            Bizim tutkumuz hastalarımızın ağız ve diş sağlığını korumak ve
            tedavi etmektir. Bu tutkumuzu hayata geçirirken alanında uzman diş
            hekimleriyle birlikte çalışır, en ileri teknolojiyi kullanır ve
            uluslararası standartlarında hizmet veririz. Amacımız hastalarımıza
            heağlığı hizmetini sunabilmek ve her hastamızın kliniklerimizden
            sağlıklı ve gülerek çıkmasını sağlamaktır.
          </p>
          <DentistList />
        </div>
      </article>
    </>
  );
};

export default AboutUs;
