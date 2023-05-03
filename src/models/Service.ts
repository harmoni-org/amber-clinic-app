import { LocalizedContent } from "./Generic";

export interface Service {
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

export interface ServiceWithShortDescription extends Service {
  shortDescription: { nodes: LocalizedContent[]};
}

export interface ServiceWithDescription extends Service {
  description: { nodes: LocalizedContent[]};
}