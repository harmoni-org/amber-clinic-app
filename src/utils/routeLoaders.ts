import axios from "axios";
import Settings from "../assets/settings/settings.json";
import Categories from "../assets/settings/categories";
import { ServiceItem } from "../pages/services/Services";

export interface MainPageContent {
  services: ServiceItem[];
  blogs: ServiceItem[];
  dentists: ServiceItem[];
}

export const getServices = async () => {
  const response = await axios.get(
    `${Settings["wordpress-api-base-url"]}posts/?categories=${Categories["services"]}&per_page=100`
  );
  return response.data.reverse();
};

export const getService = async (id: string | undefined) => {
  const response = await axios.get(
    `${Settings["wordpress-api-base-url"]}posts/${id}`
  );
  return response.data;
};

export const getBlogs = async () => {
  const response = await axios.get(
    `${Settings["wordpress-api-base-url"]}posts/?categories=${Categories["blogs"]}&per_page=100`
  );
  return response.data.reverse();
};

export const getBlog = async (id: string | undefined) => {
  const response = await axios.get(
    `${Settings["wordpress-api-base-url"]}posts/${id}`
  );
  return response.data;
};

export const getDentists = async () => {
  const response = await axios.get(
    `${Settings["wordpress-api-base-url"]}posts/?categories=${Categories["dentist"]}&per_page=100`
  );
  return response.data.reverse();
};

export const getDentist = async (id: string | undefined) => {
  const response = await axios.get(
    `${Settings["wordpress-api-base-url"]}posts/${id}`
  );
  return response.data;
};

export const getMainPageContent = async () => {
  const services = await getServices();
  const blogs = await getBlogs();
  const dentists = await getDentists();
  return { services, blogs, dentists };
};
