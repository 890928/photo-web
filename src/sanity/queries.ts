export const heroSlidesQuery = `*[_type == "heroSlide"] | order(order asc) {
  _id,
  title,
  subtitle,
  image,
  order
}`;

export const portfolioQuery = `*[_type == "portfolio"] | order(order asc) {
  _id,
  title,
  image,
  category,
  date,
  aspect,
  order
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  siteName,
  siteDescription,
  phone,
  address,
  businessHours,
  facebookUrl,
  aboutTitle,
  aboutParagraphs,
  aboutFeatures,
  aboutImage
}`;

export const servicePlansQuery = `*[_type == "servicePlan"] | order(order asc) {
  _id,
  name,
  price,
  description,
  features,
  popular,
  order
}`;

export const faqsQuery = `*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer,
  order
}`;
