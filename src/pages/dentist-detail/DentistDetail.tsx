import { useLoaderData } from "react-router-dom";

import * as React from "react";
import { ServiceItem } from "../services/Services";

const DentistDetail: React.FC = () => {
  const dentist = useLoaderData() as ServiceItem;

  return (
   <>
      <h1 className="title" dangerouslySetInnerHTML={{__html: dentist.title.rendered}} />
      <div dangerouslySetInnerHTML={{__html: dentist.content.rendered}} />
   </>
  );
};

export default DentistDetail;
