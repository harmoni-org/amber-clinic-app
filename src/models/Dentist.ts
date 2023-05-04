import { LocalizedContent } from "./Generic";

export interface Dentist {
  slug: string
  acm_fields: {
  fullName: string,
  roleTR: string,
  roleEN: string,
  bioTR: string,
  bioEN: string,
  image: {
      alt_text: string,
      source_url: string
  }
    
  }
}

export interface DentistWithDescription extends Dentist{
  description: {nodes: LocalizedContent[]};
}