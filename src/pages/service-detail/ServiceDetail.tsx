import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import "./ServiceDetail.scss";

type ServiceDetailProps = {
  item: {
    description: string;
    image: string;
    imageText: string;
    linkText: string;
    title: string;
  };
};

const ServiceDetail: React.FC = () => {
  const [wpTitle, setWpTitle] = useState("");
  const [wpContent, setWpContent] = useState("");

  function getDentist(id: any) {
    return {
      item: {
        description: "string",
        image: "string",
        imageText: "string",
        linkText: "string",
        title: "string",
      },
    };
  }

  //  TODO:  After implement static data mapping, get data dynamically.

  const { id } = useParams();
  console.log("id is:", id);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://clinicamber.com/wordpress/wp-json/wp/v2/pages/2',
      responseType: 'json'
    })
      .then(function (response) {
        console.log("Wordpress data:", response.data)
        setWpTitle(response.data.title.rendered)
        setWpContent(response.data.content.rendered)
      });
  }, [])

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        mt: 2,
      }}
    >
      <Container sx={{ py: 1 }}>
        <h1 className="title" dangerouslySetInnerHTML={{__html: wpTitle}} />
        <div dangerouslySetInnerHTML={{__html: wpContent}} />
      </Container>
    </Container>
  );
};

export default ServiceDetail;
