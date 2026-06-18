import { buildStructuredDataGraph } from "../lib/seo";

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildStructuredDataGraph()),
      }}
    />
  );
}
