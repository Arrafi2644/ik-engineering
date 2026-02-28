export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "IK Engineering",
  "alternateName": "IK Engineering Ltd",
  "description": "Leading provider of skilled labour hire, welding, fabrication & engineering project services in New Zealand",
  "url": "https://ikengineering.co.nz",
  "logo": "https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide//AiTechCraft.png",
  "image": "https://borxtnmxkmisnyjzrqlm.supabase.co/storage/v1/object/public/krheroslide//AiTechCraft.png",
  "foundingDate": "2004",
  "founder": {
    "@type": "Person",
    "name": "IK Engineering Founders"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NZ",
    "addressRegion": "Auckland",
    "addressLocality": "Auckland"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-36.8485",
    "longitude": "174.7633"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "NZ",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "areaServed": "NZ",
      "availableLanguage": "English"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
  },
  "knowsAbout": [
    "Skilled Labour Hire",
    "Welding Services",
    "Structural Steel Fabrication",
    "Machine Rebuilds",
    "Engineering Project Services"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "ratingCount": "150"
  },
  "sameAs": []
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "IK Engineering",
  "url": "https://ikengineering.co.nz",
  "description": "IK Engineering provides skilled labour hire, welders, structural steel fabrication, machine rebuilds & full engineering project services across New Zealand.",
  "publisher": {
    "@type": "Organization",
    "name": "IK Engineering"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Engineering & Skilled Labour Services",
  "description": "Comprehensive engineering services including skilled labour hire, welding, fabrication, structural steel work, and machine rebuilds",
  "provider": {
    "@type": "Organization",
    "name": "IK Engineering"
  },
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
  },
  "serviceType": [
    "Skilled Labour Hire",
    "Welding Services",
    "Structural Steel Fabrication",
    "Machine Rebuilds",
    "Engineering Project Services"
  ]
};

export const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Skilled Labour Positions",
  "description": "Join IK Engineering — New Zealand's leader in skilled labour hire, welding, fabrication & engineering jobs. Competitive pay, training & zero-harm safety culture.",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "IK Engineering"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NZ"
    }
  },
  "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACT"],
  "industry": "Engineering and Construction"
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does IK Engineering provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IK Engineering provides skilled labour hire, welding services, structural steel fabrication, machine rebuilds, and comprehensive engineering project services across New Zealand."
      }
    },
    {
      "@type": "Question",
      "name": "Where is IK Engineering located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IK Engineering is based in Auckland, New Zealand, and provides services throughout the country."
      }
    },
    {
      "@type": "Question",
      "name": "How long has IK Engineering been in business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IK Engineering has been providing engineering and skilled labour services since 2004, with over 20 years of industry experience."
      }
    }
  ]
};

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": 5,
    "bestRating": 5
  },
  "author": {
    "@type": "Organization",
    "name": "Industry Partners"
  },
  "reviewBody": "IK Engineering consistently delivers high-quality skilled labour and engineering services with exceptional safety standards and professionalism."
};

export const productSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": serviceName,
  "description": description,
  "brand": {
    "@type": "Brand",
    "name": "IK Engineering"
  },
  "category": "Engineering Services",
  "provider": {
    "@type": "Organization",
    "name": "IK Engineering"
  }
});