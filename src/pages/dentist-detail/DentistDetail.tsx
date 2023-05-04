import { useLoaderData } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Dentist } from "../../models/Dentist";
import "./DentistDetail.scss";
import { AxiosResponse } from "axios";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import parse from "html-react-parser";

const DentistDetail: React.FC = () => {
  
  const {i18n} = useTranslation();

  const dentist = ((useLoaderData() as AxiosResponse).data[0] as Dentist);


  const { fullName, branch, description } = useMemo(() => {
    let fullName = dentist.acm_fields.fullName;
    let branch = "";
    let description = "";

    switch(i18n.language.toUpperCase()) {
      case 'EN':
        branch = dentist.acm_fields.roleEN;
        description = dentist.acm_fields.bioEN;
        break;
      case 'TR':
        branch = dentist.acm_fields.roleTR;
        description = dentist.acm_fields.bioTR;
        break;
      default:
        branch = dentist.acm_fields.roleTR;
        description = dentist.acm_fields.bioTR;
    }
    return {fullName, branch, description};
  }, [i18n.language])

  return (
   <>
    <Container className="dentist-detail" maxWidth="lg" sx={{marginTop: '10px'}}>
      <Grid container spacing={2}>
        <Grid xs={6} sm={6} md={5} xsOffset={3} smOffset={3} mdOffset={0}>
          <img 
            className="picture" 
            width="100%" 
            height="auto" 
            src={dentist.acm_fields.image.source_url} 
            alt={dentist.acm_fields.image.alt_text}/>
        </Grid>
        <Grid xs={10} xsOffset={1} sm={10} smOffset={1} md sx={{mt: '10px'}}>
          <Typography variant="h3" color="secondary">{fullName}</Typography>
          <h3 className="subtitle">
            {branch}
          </h3>
          <div className="content">
            {parse(description)}
          </div>
        </Grid>
      </Grid>
    </Container>
   </>
  );
};

export default DentistDetail;
