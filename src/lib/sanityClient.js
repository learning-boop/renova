import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'puzajrus',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export const TREATMENTS_QUERY = `*[_type == "treatment"] | order(num asc) {
  num,
  "slug": slug.current,
  label,
  tagline,
  description,
  "image": image.asset->url,
  "image_second": image_second.asset->url,
  "reviews": reviews[].asset->url,
  benefits,
  ideal,
  faqs[] { q, a },
  prices[] { name, price },
  subTreatments[] {
    title,
    name,
    description,
    "image": image.asset->url
  }
}`
