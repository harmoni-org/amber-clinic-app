import { useParams, useLoaderData } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import "./ServiceDetail.scss";
import { ServiceItem } from "../services/Services";

const ServiceDetail: React.FC = () => {
  const data = useLoaderData() as ServiceItem;

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        mt: 2,
      }}
    >
      <Container sx={{ py: 1 }}>
        <h1 className="title" dangerouslySetInnerHTML={{__html: data.title.rendered}} />
        <div dangerouslySetInnerHTML={{__html: data.content.rendered}} />
      </Container>
    </Container>
  );
};

export default ServiceDetail;
