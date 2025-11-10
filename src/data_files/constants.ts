import ogImageSrc from "@images/social.png";
import dekatLokal from "@images/dekat-lokal-partner-logo.png";
import rumahBUMN from "@images/rumah-bumn-partner-logo.png";
import bankBRI from "@images/bank-bri-partner-logo.png";

export const SITE = {
  title: "Aroma Bakery",
  tagline: "Halal, Nikmat, dan Higienis Sejak 2011",
  description: "Dibuat dengan resep rumahan pilihan dan bahan berkualitas, Aroma Bakery menghadirkan roti lembut dengan berbagai isian favorit. Cocok untuk camilan sehari-hari, acara keluarga, hingga kebutuhan toko & warung.",
  description_short: "Cocok untuk camilan sehari-hari, acara keluarga, hingga kebutuhan toko & warung.",
  url: "https://aroma-bakery.vercel.app/",
  author: "Dekat Lokal",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "id-ID",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "id-ID",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Toko Roti`,
  description: "Dibuat dengan resep rumahan pilihan dan bahan berkualitas, Aroma Bakery menghadirkan roti lembut dengan berbagai isian favorit. Cocok untuk camilan sehari-hari, acara keluarga, hingga kebutuhan toko & warung.",
  image: ogImageSrc,
};

export const partnersData = [
    {
        icon: dekatLokal,
        name: "first",
        href: "#",
    },
    {
        icon: rumahBUMN,
        name: "second",
        href: "#",
    },
    {
        icon: bankBRI,
        name: "third",
        href: "#",
    },        
]