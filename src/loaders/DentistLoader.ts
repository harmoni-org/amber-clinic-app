import axios from "axios"

export const DentistLoader = async (id: string | undefined) => {

  return axios.get('http://clinicamber.com/wordpress/wp-json/wp/v2/dentists?', 
  {params: {
      slug: id ? id : '',
    _fields: 'slug,acm_fields.fullName,acm_fields.roleTR,acm_fields.image.source_url,acm_fields.image.alt_text,acm_fields.roleEN,acm_fields.bioTR,acm_fields.bioEN'
  }})
}