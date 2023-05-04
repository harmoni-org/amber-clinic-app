import axios from "axios";
import { MainPageLoaderData } from "../models/MainPageLoader";
import { Dentist } from "../models/Dentist";
import { Service } from "../models/Service";
import { Blog } from "../models/Blog";

export const MainPageLoader = async (): Promise<MainPageLoaderData> => {
  let dentists: Dentist[] = [];
  let services: Service[] = [];
  let blogs: Blog[] = [];
  await fetchDentists().then(response => dentists = response.data );
  await fetchServices().then(response => services = response.data );
  await fetchBlogs().then(response => blogs = response.data );
  
  return {
    dentists,
    services,
    blogs
  }
}

const fetchDentists = async () => {
  return axios.get('http://clinicamber.com/wordpress/wp-json/wp/v2/dentists?', 
    {params: {
      _fields: 'slug,acm_fields.fullName,acm_fields.roleTR,acm_fields.image.source_url,acm_fields.image.alt_text,acm_fields.roleEN,acm_fields.bioTR,acm_fields.bioEN'
    }})
}

const fetchServices = async () => {
  return axios.get('http://clinicamber.com/wordpress/wp-json/wp/v2/services?', 
    {params: {
      _fields: 'slug,acm_fields.descriptionTR,acm_fields.descriptionEN,acm_fields.image.source_url,acm_fields.image.alt_text,acm_fields.shortDescriptionTR,acm_fields.shortDescriptionEN,acm_fields.titleTR,acm_fields.titleEN'
    }})
}

const fetchBlogs = async () => {
  return axios.get('http://clinicamber.com/wordpress/wp-json/wp/v2/blogs?', 
    {params: {
      _fields: 'slug,acm_fields.descriptionTR,acm_fields.descriptionEN,acm_fields.image.source_url,acm_fields.image.alt_text,acm_fields.shortDescriptionTR,acm_fields.shortDescriptionEN,acm_fields.titleTR,acm_fields.titleEN'
    }})
}