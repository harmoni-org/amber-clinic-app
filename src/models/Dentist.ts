import { LocalizedContent } from "./Generic";

export interface Dentist {
  dentistImage: {
    mediaItemUrl: string;
    id: string;
  },
  name: string;
  id: string;
  branchTitle: {nodes:  LocalizedContent[]};
  urlSlug: string;
}

export interface DentistWithDescription extends Dentist{
  description: {nodes: LocalizedContent[]};
}