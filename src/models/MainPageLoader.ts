import { Blog } from "./Blog";
import { Dentist } from "./Dentist";
import { Service } from "./Service";

export interface MainPageLoaderData {
  dentists: Dentist[];
  services: Service[];
  blogs: Blog[];
}