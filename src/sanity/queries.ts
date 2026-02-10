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
