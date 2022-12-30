import { LocalizedContent } from "./Generic";

export interface Service {
  image: {
    mediaItemUrl: string;
    id: string;
    altText: string;
  },
  slug: string;
  serviceTitle: { nodes: LocalizedContent[]};
  id: string;
}

export interface ServiceWithShortDescription extends Service {
  shortDescription: { nodes: LocalizedContent[]};
}

export interface ServiceWithDescription extends Service {
  description: { nodes: LocalizedContent[]};
}