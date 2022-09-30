import DentistList from "../../components/OurDentists/DentistList";

const AboutUs: React.FC = () => {
  return (
    <article>
      <div className="text">
        <p className="blackbox">
          Bizim tutkumuz hastalarımızın ağız ve diş sağlığını korumak ve tedavi
          etmektir. Bu tutkumuzu hayata geçirirken alanında uzman diş
          hekimleriyle birlikte çalışır, en ileri teknolojiyi kullanır ve
          uluslararası standartlarında hizmet veririz. Amacımız hastalarımıza
          heağlığı hizmetini sunabilmek ve her hastamızın kliniklerimizden
          sağlıklı ve gülerek çıkmasını sağlamaktır.
        </p>
        <DentistList />
      </div>
    </article>
  );
};

export default AboutUs;
