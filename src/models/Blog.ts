import { LocalizedContent } from "./Generic";

export interface Blog {
  image: {
    mediaItemUrl: string;
    id: string;
    altText: string;
  },
  blogTitle: { nodes: LocalizedContent[]};
  content: { nodes: LocalizedContent[]};
  id: string;
  modelSlug: string;
}