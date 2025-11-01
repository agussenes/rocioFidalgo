// src/seo/JsonLD.jsx
export default function JsonLD({ data }) {
  if (!data) return null;
  const json = Array.isArray(data) ? data : [data];
  return json.map((item, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
  ));
}
