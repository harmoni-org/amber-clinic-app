export interface Blog {
  slug: string;
  acm_fields: {
    image: {
      alt_text: string;
      source_url: string;
    },
    descriptionTR: string;
    descriptionEN: string;
    shortDescriptionTR: string;
    shortDescriptionEN: string;
    titleTR: string;
    titleEN: string;
  }
}