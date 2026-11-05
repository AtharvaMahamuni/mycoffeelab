import { absolute, PUBLISHER, SAME_AS, SITE_NAME, SITE_ORIGIN } from "./site";

export interface Crumb {
  name: string;
  path: string;
}

export function personNode() {
  return {
    "@type": "Person",
    "@id": `${SITE_ORIGIN}/#atharva`,
    name: PUBLISHER,
    sameAs: [...SAME_AS],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    name: SITE_NAME,
    url: absolute("/"),
    author: { "@id": `${SITE_ORIGIN}/#atharva` },
  };
}

export function breadcrumbNode(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function graph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function appNode(name: string, path: string, description: string) {
  return {
    "@type": "WebApplication",
    name,
    url: absolute(path),
    description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@id": `${SITE_ORIGIN}/#atharva` },
  };
}

export function articleNode(headline: string, path: string, description: string) {
  return {
    "@type": "Article",
    headline,
    description,
    url: absolute(path),
    author: { "@id": `${SITE_ORIGIN}/#atharva` },
  };
}

export function faqNode(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
