import { useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import { DentistWithDescription } from "../../models/Dentist";
import Renderer from "../../components/Renderer";
import "./DentistDetail.scss";

const DentistDetail: React.FC = () => {
  const { id } = useParams();

  return (
   <>
    {/* {loading && (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '300px' }}>
        <CircularProgress color='secondary' size={60}/>
      </Box>
    )} */}
    {/* {!loading && !error && (
      <Container className="dentist-detail" maxWidth="lg" sx={{marginTop: '10px'}}>
        <Grid container spacing={2}>
          <Grid xs={6} sm={6} md={5} xsOffset={3} smOffset={3} mdOffset={0}>
            <img className="picture" width="100%" height="auto" src={dentist.dentistImage.mediaItemUrl}/>
          </Grid>
          <Grid xs={10} xsOffset={1} sm={10} smOffset={1} md sx={{mt: '10px'}}>
            <Typography variant="h3" color="secondary">{dentist.name}</Typography>
            <h3 className="subtitle">
              <Renderer translate nodes={dentist.branchTitle.nodes} />
            </h3>
            <div className="content">
              <Renderer translate parseAndSanitize nodes={dentist.description.nodes} />
            </div>
          </Grid>
        </Grid>
      </Container>
    )} */}
   </>
  );
};

export default DentistDetail;
