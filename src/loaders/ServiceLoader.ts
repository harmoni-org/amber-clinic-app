export const ServiceLoader = async (id: string | undefined) => {
  return fetch('http://clinicamber.com/wordpress/wp-json/wp/v2/services?' + new URLSearchParams({
    slug: id ? id : '',
    _fields: 'slug,acm_fields.descriptionTR,acm_fields.descriptionEN,acm_fields.image.source_url,acm_fields.image.alt_text,acm_fields.shortDescriptionTR,acm_fields.shortDescriptionEN,acm_fields.titleTR,acm_fields.titleEN'
  }))
}